import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const statuses = ['🤞', '✌️', '🤘', '👌', '🤌', '👍', '👋', '🤙', '🖖', '💪'] as const;

export const sections = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  },
] as const;

export const links = [
  {
    link: 'https://www.linkedin.com/in/aldo-testino-56486a244',
    icon: FaLinkedin
  },
  {
    link: 'https://github.com/aldotestino',
    icon: FaGithub
  }
] as const;

export const experiences = [{
  title: 'Politecnico di Bari',
  description: 'Graduated with a score of 110 cum laude in Computer and Automation Engineering.',
  icon: AcademicCapIcon,
  year: '2019 - 2022'
}, {
  title: 'Leaf s.r.l.',
  description: 'I work as a full stack developer using tools such as Express, React, MongoDB and Docker',
  icon: BriefcaseIcon,
  year: '2022 - 2023'
}, {
  title: 'Politecnico di Bari',
  description: 'I am pursuing a master\'s degree in Computer Engineering with a specialization in the Cyberphysical Systems curriculum.',
  icon: AcademicCapIcon,
  year: '2022 - 2023'
}] as const;

export const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind', 'Prisma', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Express', 'Python', 'pyTorch', 'Java', 'Go'
] as const;
