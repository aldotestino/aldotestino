import { differenceInYears } from 'date-fns';
import {
  SectionContainer,
  SectionContent,
  SectionHeader,
} from '@/components/section-container';

function About() {
  return (
    <SectionContainer id="about">
      <SectionHeader>About Me</SectionHeader>
      <SectionContent className="prose-lg leading-normal">
        <p className="m-0">
          I'm a {differenceInYears(new Date(), new Date('2001-01-30'))}
          -year-old Software Engineer from Corato, Bari, Italy, with a strong
          foundation in Computer Engineering and a passion for creating
          impactful digital solutions. I hold a Bachelor's degree in Computer
          Engineering and Automation from Politecnico di Bari, where I
          collaborated with Leaf s.r.l. to develop an application for
          controlling hydroponic environments. Building upon this, I pursued a
          Master's degree in Computer Engineering at the same institution,
          focusing my thesis on Human-Centered Artificial Intelligence. This
          project involved developing an application that aids physicians in
          managing predictions and explanations related to brain age.
        </p>
        <p className="m-0">
          Professionally, I have experience working at Olivetti in the IT
          Operations Team as a PaaS/SaaS Solution Designer. In this role, I
          developed the front-end of an internal application using React and was
          responsible for setting up monitoring of internal applications with
          Dynatrace. Currently, I am embarking on a new journey as a Software
          Engineer at Albatross AI.
        </p>
        <p className="m-0">
          Beyond my professional endeavors, I'm an avid basketball and Formula 1
          enthusiast and a dedicated gym-goer, always striving for personal
          growth both mentally and physically.
        </p>
      </SectionContent>
    </SectionContainer>
  );
}

export default About;
