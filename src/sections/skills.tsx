import { SectionContainer, SectionContent, SectionHeader } from '@/components/section-container';
import SkillIcon from '@/components/skill-icon';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { skills } from '@/lib/data';

function Skills() {
  return (
    <SectionContainer id="skills">
      <SectionHeader>Skills</SectionHeader>
      <SectionContent className="relative">
        <div className="w-full absolute z-50 h-full bg-gradient-to-r from-background from-5% via-transparent to-background to-95%" />
        <InfiniteSlider gap={24} duration={60} durationOnHover={120}>
          {Object.keys(skills).map(name => (
            <SkillIcon key={name} name={name as keyof typeof skills} className="size-12 fill-primary" />
          ))}
        </InfiniteSlider>
      </SectionContent>
    </SectionContainer>
  );
}

export default Skills;
