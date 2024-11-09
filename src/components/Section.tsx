import { Hash } from 'lucide-react';
import React from 'react';

function Section({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section className="grid gap-8">
      <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
        <Hash className="size-10" />
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default Section;
