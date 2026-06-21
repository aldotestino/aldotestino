import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PinnedRepo } from "@/functions/pinned-repos";

export function RepoCard({ repo }: { repo: PinnedRepo }) {
  return (
    <a href={repo.url} target="_blank" aria-label={repo.name}>
      <Card className="h-48 hover:shadow-lg cursor-pointer duration-150 hover:translate-x-1 hover:-translate-y-1 transition-all">
        <CardHeader>
          <CardTitle>{repo.name}</CardTitle>
          <CardDescription>{repo.description}</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </a>
  );
}
