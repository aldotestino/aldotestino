'use client';
import { projects, } from '../lib/data';
import ProjectCard from './project-card';

function Projects() {

  return (
    <section
      id="projects" 
      className="max-w-3xl w-full flex flex-col items-center">
      <h2 className="text-3xl font-medium pb-6">My Projects</h2>
      <div className="w-full flex flex-col gap-6 items-center">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p}  />
        ))}
      </div>
    </section>
  );
}

export default Projects;