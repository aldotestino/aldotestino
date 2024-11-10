import type { Experience } from '@/lib/types';

function ExperienceCard({ icon: Icon, dates, title, location, description }: Experience) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-6">
      <div className="grid grid-rows-[auto,1fr] gap-2 items-center">
        <Icon className="size-10 text-zinc-400" />
        <span className="w-[3px] h-full rounded-full mx-auto bg-zinc-400" />
      </div>
      <div className="py-2 grid gap-2">
        <div className="grid gap-0">
          <span className="text-muted-foreground">{dates}</span>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <span className="text-muted-foreground font-semibold">{location}</span>
        </div>
        <p className="prose-lg leading-normal">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
