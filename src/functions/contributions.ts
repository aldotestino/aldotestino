import { createServerFn } from "@tanstack/react-start";
import { Result, TaggedError } from "better-result";
import { env } from "cloudflare:workers";
import z from "zod";

const MAX_LEVEL = 4;

// oxlint-disable-next-line unicorn/throw-new-error
class ContributionsError extends TaggedError("ContributionsError")<{
  message: string;
}>() {}

// oxlint-disable-next-line no-inline-comments
const graphQlQuery = /* gql */ `
query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            weekday
          }
        }
      }
    }
  }
}
`;

export const GithubContributions = z.object({
  data: z.object({
    user: z.object({
      contributionsCollection: z.object({
        contributionCalendar: z.object({
          totalContributions: z.number().int().gte(0),
          weeks: z.array(
            z.object({
              contributionDays: z.array(
                z.object({
                  contributionCount: z.number().int().gte(0),
                  date: z.iso.date(),
                  weekday: z.number().int().gte(0).lte(6),
                })
              ),
            })
          ),
        }),
      }),
    }),
  }),
});

export type GithubContributions = z.infer<typeof GithubContributions>;

export const getContributions = createServerFn().handler(async () => {
  const GITHUB_TOKEN = await env.GITHUB_TOKEN.get();

  const result = await Result.gen(async function* () {
    const response = yield* await Result.tryPromise({
      try: () =>
        fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({
            query: graphQlQuery,
            variables: {
              login: "aldotestino",
            },
          }),
        }),
      catch: () =>
        new ContributionsError({
          message: "Failed to fetch contributions",
        }),
    });

    const rawData = yield* await Result.tryPromise({
      try: () => response.json(),
      catch: () =>
        new ContributionsError({ message: "Failed to parse JSON response" }),
    });

    const githubContributions = GithubContributions.safeParse(rawData);

    if (!githubContributions.success) {
      return Result.err(
        new ContributionsError({
          message: "Failed to validate contributions data",
        })
      );
    }

    return Result.ok(githubContributions.data);
  });

  return Result.match(result, {
    ok: (data) => {
      const rawActivities =
        data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
          (week) =>
            week.contributionDays.map((day) => ({
              date: day.date,
              count: day.contributionCount,
            }))
        );

      const maxCount = Math.max(
        ...rawActivities.map((activity) => activity.count)
      );

      const activities = rawActivities.map((activity) => ({
        date: activity.date,
        count: activity.count,
        level: Math.ceil((activity.count / maxCount) * MAX_LEVEL),
      }));

      return {
        activities,
        totalCount:
          data.data.user.contributionsCollection.contributionCalendar
            .totalContributions,
      };
    },
    err: (error) => {
      console.warn("Error fetching contributions:", error.message);
      return {
        activities: [],
        totalCount: 0,
      };
    },
  });
});
