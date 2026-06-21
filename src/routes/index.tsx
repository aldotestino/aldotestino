import { useHotkey } from "@tanstack/react-hotkeys";
import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
} from "../components/kibo-ui/contribution-graph";
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
import { useTheme } from "../components/theme-provider";
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
import { getContributions } from "../functions/contributions";
import { getPinnedRepos } from "../functions/pinned-repos";
import { experiences } from "../lib/data";

export const Route = createFileRoute("/")({
  loader: async () => {
    const pinnedRepos = await getPinnedRepos();
    const contributions = await getContributions();

    return {
      pinnedRepos,
      contributions,
    };
  },
  component: App,
});

function App() {
  const { pinnedRepos, contributions } = Route.useLoaderData();
  const { theme, setTheme } = useTheme();

  useHotkey("D", () => {
    setTheme(theme === "dark" ? "light" : "dark");
  });

  return (
    <div className="space-y-6 p-6 px-4 sm:px-6 max-w-5xl mx-auto">
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
            <FaXTwitter />
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            size="icon"
            render={
              <a
                href="mailto:aldotestino4@gmail.com"
                target="_blank"
                aria-label="Email"
              />
            }
          >
            <Mail />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pinnedRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
      <div className="space-y-3 px-3">
        <h2 className="text-muted-foreground text-sm font-medium">
          // contributions
        </h2>
        <ContributionGraph data={contributions.activities} className="mx-auto">
          <ContributionGraphCalendar>
            {({ activity, dayIndex, weekIndex }) => (
              <Tooltip>
                <TooltipTrigger
                  render={
                    <g>
                      <ContributionGraphBlock
                        activity={activity}
                        className="cursor-pointer"
                        dayIndex={dayIndex}
                        weekIndex={weekIndex}
                      />
                    </g>
                  }
                />
                <TooltipContent className="flex flex-col items-start gap-1">
                  <p className="font-semibold">{activity.date}</p>
                  <p>{activity.count} contributions</p>
                </TooltipContent>
              </Tooltip>
            )}
          </ContributionGraphCalendar>
          <ContributionGraphFooter>
            {/* <ContributionGraphTotalCount /> */}
            <div className="text-muted-foreground">
              {contributions.totalCount} total contributions last year
            </div>
            <ContributionGraphLegend />
          </ContributionGraphFooter>
        </ContributionGraph>
      </div>
    </div>
  );
}
