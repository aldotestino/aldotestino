import { Hash } from 'lucide-react';
import type { ComponentProps } from 'react';
import { InView } from '@/components/ui/in-view';
import { cn } from '@/lib/utils';

export function SectionContainer({
  children,
  className,
  ...props
}: ComponentProps<'section'>) {
  return (
    <InView viewOptions={{ once: true }}>
      <section className={cn('grid gap-8', className)} {...props}>
        {children}
      </section>
    </InView>
  );
}

export function SectionHeader({
  children,
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      <Hash className="size-8" />
      <h2 className="font-bold text-3xl">{children}</h2>
    </div>
  );
}

export function SectionContent({
  children,
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div className={cn('grid gap-4', className)} {...props}>
      {children}
    </div>
  );
}
