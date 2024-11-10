import type { Experience } from '@/lib/types';
import { InView } from '@/components/ui/in-view';

function ExperienceCard({ icon: Icon, dates, title, location, description }: Experience) {
  return (
    <InView
      variants={{
        hidden: {
          opacity: 0,
          x: 100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      viewOptions={{ margin: '0px 0px -200px 0px', once: true }}
    >
      <div className="grid grid-cols-[auto,1fr] gap-6">
        <div className="grid grid-rows-[auto,1fr] gap-2 items-center">
          <Icon className="size-10 text-muted-foreground" />
          <span className="w-[3px] h-full rounded-full mx-auto bg-muted-foreground" />
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
    </InView>
  );
}

export default ExperienceCard;
