import { GraduationCap, BriefcaseBusiness } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import fontanelle from '@/assets/fontanelle.png';
import instantMessaging from '@/assets/instant-messaging.png';
import vctmang from '@/assets/vcetmang.png';

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
  icon: GraduationCap,
  year: '2019 - 2022'
}, {
  title: 'Leaf s.r.l.',
  description: 'I work as a full stack developer using tools such as Express, React, MongoDB and Docker',
  icon: BriefcaseBusiness,
  year: '2022 - 2024'
}, {
  title: 'Politecnico di Bari',
  description: 'I am pursuing a master\'s degree in Computer Engineering with a specialization in the Cyberphysical Systems curriculum.',
  icon: GraduationCap,
  year: `2022 - ${(new Date()).getFullYear()}`
}, {
  title: 'Olivetti',
  description: 'I cover the position of PaaS/SaaS Solution Designer in the IT Operation Team',
  icon: BriefcaseBusiness,
  year: `2024 - ${(new Date()).getFullYear()}`
}] as const;

export const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind', 'Prisma', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Express', 'Python', 'pyTorch', 'Java', 'Go'
] as const;

export const projects = [{
  title: 'Fontanelle',
  description: 'Worked on this Web App for almost two months. It allows users to find the nearest public fountain, add new ones, vote and report their problems.',
  deploy: '',
  github: 'https://github.com/aldotestino/fontanelle',
  image: fontanelle,
  tags: ['Go', 'React', 'PostgreSQL', 'MapBox', 'Google Cloud', 'Docker', 'Nginx']
}, {
  title: 'Instant Messaging',
  description: 'This is one of my first projects. It is a simple instant messaging app that allows users to send messages to each other.',
  deploy: '',
  github: 'https://github.com/aldotestino/instant-messaging',
  image: instantMessaging,
  tags: ['NodeJS', 'React', 'PostgreSQL', 'Prisma', 'GraphQL', 'Docker']
}, {
  title: 'Vctmang',
  description: 'This is a project work for the course of Fondamenti Web at Politecnico di Bari. It is a website for a fictional fast food company.',
  deploy: '',
  github: 'https://github.com/aldotestino/vcetmang',
  image: vctmang,
  tags: ['NodeJS', 'React', 'MongoDB', 'REST API', 'Socket.io', 'Docker']
}] as const;