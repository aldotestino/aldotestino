import { createServerFn } from "@tanstack/react-start";
import { Result, TaggedError } from "better-result";
import { env } from "cloudflare:workers";
import z from "zod";

// oxlint-disable-next-line unicorn/throw-new-error
class PinnedReposError extends TaggedError("PinnedReposError")<{
  message: string;
}>() {}

// oxlint-disable-next-line no-inline-comments
const graphQlQuery = /* gql */ `
query($login: String!) {
  user(login: $login) {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage {
            name
          }
          repositoryTopics(first: 30) {
             nodes {
               topic {
                 name
               }
             }
          }
        }
      }
    }
  }
}
`;

export const GithubPinnedRepos = z.object({
  data: z.object({
    user: z.object({
      pinnedItems: z.object({
        nodes: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            description: z.string().nullable().optional(),
            url: z.url(),
            stargazerCount: z.int().gte(0),
            forkCount: z.int().gte(0),
            primaryLanguage: z.object({
              name: z.string(),
            }),
            repositoryTopics: z.object({
              nodes: z.array(
                z.object({
                  topic: z.object({
                    name: z.string(),
                  }),
                })
              ),
            }),
          })
        ),
      }),
    }),
  }),
});

export type GithubPinnedRepos = z.infer<typeof GithubPinnedRepos>;

export const getPinnedRepos = createServerFn().handler(async () => {
  const GITHUB_TOKEN = await env.GITHUB_TOKEN.get();

  const result = await Result.gen(async function* () {
    const response = yield* await Result.tryPromise({
      try: () =>
        fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "User-Agent": "aldotestino-website",
          },
          body: JSON.stringify({
            query: graphQlQuery,
            variables: {
              login: env.GITHUB_LOGIN,
            },
          }),
        }),
      catch: () =>
        new PinnedReposError({
          message: "Failed to fetch pinned repositories",
        }),
    });

    const rawData = yield* await Result.tryPromise({
      try: () => response.json(),
      catch: () =>
        new PinnedReposError({ message: "Failed to parse JSON response" }),
    });

    const githubPinnedRepos = GithubPinnedRepos.safeParse(rawData);

    if (!githubPinnedRepos.success) {
      return Result.err(
        new PinnedReposError({
          message: "Failed to validate pinned repositories data",
        })
      );
    }

    return Result.ok(githubPinnedRepos.data);
  });

  return Result.match(result, {
    ok: ({ data }) =>
      data.user.pinnedItems.nodes.map((node) => ({
        id: node.id,
        name: node.name,
        description: node.description,
        url: node.url,
        stars: node.stargazerCount,
        forks: node.forkCount,
        primaryLanguage: node.primaryLanguage?.name,
        topics: node.repositoryTopics.nodes.map((n) => n.topic.name),
      })),
    err: (error) => {
      console.warn("Error fetching pinned repositories:", error.message);
      return [];
    },
  });
});

export type PinnedRepo = Awaited<ReturnType<typeof getPinnedRepos>>[number];
