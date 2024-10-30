'use client';
import { experiences } from '@/lib/data';
import ExperienceCard from './experience-card';

function Experience() {

  return (
    <section 
      id="experience" className="w-full flex flex-col items-center overflow-x-hidden">
      <h2 className="text-3xl font-medium pb-6">My Experience</h2>
      <div className="space-y-6">
        {
          experiences.toReversed().map((e, i) => (
            <ExperienceCard {...e} key={i} index={i} />
          ))
        }
      </div>
    </section>
  );
}

export default Experience;