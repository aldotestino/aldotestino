import ProjectCard from '@/components/project-card';
import {
  SectionContainer,
  SectionContent,
  SectionHeader,
} from '@/components/section-container';
import { projects } from '@/lib/data';

function Projects() {
  return (
    <SectionContainer id="projects">
      <SectionHeader>Projects</SectionHeader>
      <SectionContent>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </SectionContent>
    </SectionContainer>
  );
}

export default Projects;
