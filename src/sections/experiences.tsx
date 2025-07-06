import ExperienceCard from '@/components/experience-card';
import {
  SectionContainer,
  SectionContent,
  SectionHeader,
} from '@/components/section-container';
import { experiences } from '@/lib/data';

function Experiences() {
  return (
    <SectionContainer id="experiences">
      <SectionHeader>Experiences</SectionHeader>
      <SectionContent>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </SectionContent>
    </SectionContainer>
  );
}

export default Experiences;
