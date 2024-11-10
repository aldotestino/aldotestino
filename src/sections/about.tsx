import { SectionContainer, SectionContent, SectionHeader } from '@/components/section-container';

function About() {
  return (
    <SectionContainer id="about">
      <SectionHeader>About Me</SectionHeader>
      <SectionContent className="prose-lg leading-normal">
        <p className="m-0">After completing my bachelor's degree in Computer and Automation Engineering with an experimental thesis in collaboration with the startup Leaf s.r.l., I decided to further my education by pursuing a master's degree in Computer Engineering with a specialization in the Cyberphysical Systems curriculum.</p>
        <p className="m-0">My academic and professional path has instilled in me a passion for researching and developing advanced computer systems, particularly in the field of cyberphysical systems. I am always on the lookout for new challenges and opportunities to contribute to technology's evolution.</p>
      </SectionContent>
    </SectionContainer>
  );
}

export default About;
