import type { Project } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ title, description, deployment, repository, tags, image }: Project) {
  return (
    <Card className="relative overflow-hidden flex flex-col justify-between sm:pr-80 min-h-80 group">
      <div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="prose leading-normal text-muted-foreground">{description}</p>
          <div className="flex gap-2">
            {repository
              ? (
                  <Link href={repository} target="_blank" className={buttonVariants({ size: 'sm', className: 'h-8' })}>
                    <FaGithub className="size-4 mr-1" />
                    Repository
                  </Link>
                )
              : null}
            {deployment
              ? (
                  <Link href={deployment} target="_blank" className={buttonVariants({ size: 'sm', variant: 'outline', className: 'h-8' })}>
                    <ArrowUpRight className="size-4 mr-1" />
                    Deployment
                  </Link>
                )
              : null}
          </div>
        </CardContent>
      </div>
      <CardFooter className="flex gap-2 flex-wrap">
        {tags.map(tag => (
          <Badge key={tag} variant="secondary" className="uppercase tracking-wider">{tag}</Badge>
        ))}
      </CardFooter>
      <Image
        src={image}
        alt={title}
        quality={95}
        className="hidden sm:block rounded-2xl shadow-2xl absolute top-8 -right-10 w-80 transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
      />
    </Card>
  );
}

export default ProjectCard;
