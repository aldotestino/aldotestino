import { InView } from '@/components/ui/in-view';
import type { Experience } from '@/lib/types';

function ExperienceCard({
  icon: Icon,
  dates,
  title,
  location,
  description,
}: Experience) {
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
      <div className="grid grid-cols-[auto_1fr] gap-6">
        <div className="grid grid-rows-[auto_1fr] items-center gap-2">
          <Icon className="size-10 text-muted-foreground" />
          <span className="mx-auto h-full w-[3px] rounded-full bg-muted-foreground/40" />
        </div>
        <div className="grid gap-2 py-2">
          <div className="grid gap-0">
            <span className="text-muted-foreground">{dates}</span>
            <h3 className="font-semibold text-2xl">{title}</h3>
            <span className="font-semibold text-muted-foreground">
              {location}
            </span>
          </div>
          <p className="prose-lg leading-normal">{description}</p>
        </div>
      </div>
    </InView>
  );
}

export default ExperienceCard;
