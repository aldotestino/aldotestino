import { GitFork, Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PinnedRepo } from "@/functions/pinned-repos";

import { Badge } from "./ui/badge";

export function RepoCard({ repo }: { repo: PinnedRepo }) {
  return (
    <a href={repo.url} target="_blank" aria-label={repo.name}>
      <Card className="h-full hover:shadow-lg cursor-pointer duration-150 hover:translate-x-1 hover:-translate-y-1 transition-[shadow,transform]">
        <CardHeader>
          <CardTitle>{repo.name}</CardTitle>
          <CardDescription>{repo.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <span>{repo.primaryLanguage}</span>
            <div className="flex items-center gap-1">
              <Star className="size-4" />
              <span>{repo.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="size-4" />
              <span>{repo.forks}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {repo.topics.map((topic) => (
              <Badge variant="secondary" key={topic}>
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
