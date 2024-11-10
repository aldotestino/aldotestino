import type { ComponentProps } from 'react';
import { InView } from '@/components/ui/in-view';
import { cn } from '@/lib/utils';
import { Hash } from 'lucide-react';

export function SectionContainer({ children, className, ...props }: ComponentProps<'section'>) {
  return (
    <InView viewOptions={{ once: true }}>
      <section className={cn('grid gap-8', className)} {...props}>
        {children}
      </section>
    </InView>
  );
}

export function SectionHeader({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex gap-2 items-center', className)} {...props}>
      <Hash className="size-8" />
      <h2 className="text-3xl font-bold">{children}</h2>
    </div>
  );
}

export function SectionContent({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('grid gap-4', className)} {...props}>
      {children}
    </div>
  );
}
