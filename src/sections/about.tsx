import { Section, SectionContent, SectionHeader } from '@/components/section';

function About() {
  return (
    <Section>
      <SectionHeader>About Me</SectionHeader>
      <SectionContent>
        <div className="prose-lg">
          <p>After completing my bachelor's degree in Computer and Automation Engineering with an experimental thesis in collaboration with the startup Leaf s.r.l., I decided to further my education by pursuing a master's degree in Computer Engineering with a specialization in the Cyberphysical Systems curriculum.</p>
          <p>My academic and professional path has instilled in me a passion for researching and developing advanced computer systems, particularly in the field of cyberphysical systems. I am always on the lookout for new challenges and opportunities to contribute to technology's evolution.</p>
        </div>
      </SectionContent>
    </Section>
  );
}

export default About;
