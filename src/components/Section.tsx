import type { ReactNode } from 'react';
import { Hash } from 'lucide-react';

export function Section({ children }: { children: ReactNode }) {
  return (
    <section className="grid gap-8">
      {children}
    </section>
  );
}

export function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-2 items-center">
      <Hash className="size-8" />
      <h2 className="text-3xl font-bold">{children}</h2>
    </div>
  );
}

export function SectionContent({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-4">
      {children}
    </div>
  );
}
