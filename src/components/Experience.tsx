import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../lib/data';

function Experience() {

  return (
    <section 
      id="experience" className="max-w-3xl w-full flex flex-col items-center">
      <h2 className="text-3xl font-medium pb-6">My Experience</h2>
      <div className="space-y-6 overflow-hidden">
        {
          experiences.map((e, i) => (
            <ExperienceCard {...e} key={i} index={i} />
          ))
        }
      </div>
    </section>
  );
}

export default Experience;