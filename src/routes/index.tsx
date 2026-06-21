import { createFileRoute } from "@tanstack/react-router";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

import { RepoCard } from "../components/repo-card";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "../components/reui/timeline";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "../components/ui/item";
import { getPinnedRepos } from "../functions/pinned-repos";
import { experiences } from "../lib/data";

export const Route = createFileRoute("/")({
  loader: () => getPinnedRepos(),
  component: App,
});

function App() {
  const pinnedRepos = Route.useLoaderData();

  return (
    <div className="space-y-6 p-6 max-w-5xl mx-auto">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/aldotestino.png" />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>aldotestino</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            nativeButton={false}
            variant="outline"
            size="icon"
            render={
              <a
                href="https://github.com/aldotestino"
                target="_blank"
                aria-label="GitHub"
              />
            }
          >
            <FaGithub />
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            size="icon"
            render={
              <a
                href="https://linkedin.com/in/aldotestino"
                target="_blank"
                aria-label="LinkedIn"
              />
            }
          >
            <FaLinkedin />
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            size="icon"
            render={
              <a
                href="https://x.com/aldotestino4"
                target="_blank"
                aria-label="X"
              />
            }
          >
            <FaTwitter />
          </Button>
        </ItemActions>
      </Item>
      <div className="space-y-3 px-3">
        <h2 className="text-muted-foreground text-sm font-medium">// about</h2>
        <p className="font-light">
          I'm Aldo, a 25-year-old Software Engineer from Corato, Italy,
          currently building AI-powered products at Albatross AI. My background
          spans software engineering, cloud platforms, and machine learning,
          with a Master's degree in Computer Engineering from Politecnico di
          Bari and a thesis focused on Human-Centered AI for healthcare. I enjoy
          designing reliable systems, building developer tools, and turning
          complex ideas into products that people actually use. When I'm not
          coding, you'll probably find me in the gym, watching Formula 1, or
          following basketball.
        </p>
      </div>
      <div className="space-y-3 px-3">
        <h2 className="text-muted-foreground text-sm font-medium">
          // experiences
        </h2>
        <Timeline defaultValue={1} className="w-full">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} step={index + 1}>
              <TimelineHeader>
                <TimelineDate>{experience.date}</TimelineDate>
                <TimelineTitle>{experience.title}</TimelineTitle>
              </TimelineHeader>
              <TimelineIndicator />
              <TimelineSeparator />
              <TimelineContent>{experience.description}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
      <div className="space-y-3 px-3">
        <h2 className="text-muted-foreground text-sm font-medium">// repos</h2>
        <div className="grid grid-cols-2 gap-4">
          {pinnedRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
}
