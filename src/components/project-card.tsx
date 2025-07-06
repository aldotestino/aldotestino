import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { InView } from '@/components/ui/in-view';
import type { Project } from '@/lib/types';

function ProjectCard({
  title,
  description,
  deployment,
  repository,
  tags,
  image,
}: Project) {
  return (
    <InView
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.8,
        },
        visible: {
          opacity: 1,
          scale: 1,
        },
      }}
      viewOptions={{ margin: '0px 0px -200px 0px', once: true }}
    >
      <Card className="group relative flex min-h-80 flex-col justify-between overflow-hidden sm:pr-80">
        <div>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="prose text-muted-foreground leading-normal">
              {description}
            </p>
            <div className="flex gap-2">
              {repository ? (
                <Link
                  className={buttonVariants({ size: 'sm', className: 'h-8' })}
                  href={repository}
                  target="_blank"
                >
                  <FaGithub className="mr-1 size-4" />
                  Repository
                </Link>
              ) : null}
              {deployment ? (
                <Link
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'outline',
                    className: 'h-8',
                  })}
                  href={deployment}
                  target="_blank"
                >
                  <ArrowUpRight className="mr-1 size-4" />
                  Deployment
                </Link>
              ) : null}
            </div>
          </CardContent>
        </div>
        <CardFooter className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              className="uppercase tracking-wider"
              key={tag}
              variant="secondary"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
        <Image
          alt={title}
          className="-right-10 group-hover:-translate-x-3 group-hover:-rotate-2 absolute top-8 hidden w-80 rounded-2xl shadow-2xl transition group-hover:translate-y-3 group-hover:scale-[1.04] sm:block"
          quality={95}
          src={image}
        />
      </Card>
    </InView>
  );
}

export default ProjectCard;
