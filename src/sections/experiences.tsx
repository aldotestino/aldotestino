import ExperienceCard from '@/components/experience-card';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { experiences } from '@/lib/data';

function Experiences() {
  return (
    <Section>
      <SectionHeader>Experiences</SectionHeader>
      <SectionContent>
        {experiences.map(experience => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </SectionContent>
    </Section>
  );
}

export default Experiences;
