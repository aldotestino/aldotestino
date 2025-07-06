import { Briefcase, GraduationCap, Rocket } from 'lucide-react';
import fontanelle from '@/assets/fontanelle.webp';
import instantMessaging from '@/assets/instant-messaging.webp';
import vctmang from '@/assets/vcetmang.webp';
import type { Experience, Project } from '@/lib/types';

export const experiences: Experience[] = [
  {
    id: '1',
    icon: Briefcase,
    dates: 'June 2025 - Now',
    title: 'Albatross AI',
    location: 'Baar, Switzerland',
    description: 'Junior Software Engineer',
  },
  {
    id: '2',
    icon: Briefcase,
    dates: 'October 2024 - June 2025',
    title: 'Olivetti',
    location: 'Bari, Italy',
    description: 'PaaS/SaaS Solution Designer - IT Operation',
  },
  {
    id: '3',
    icon: GraduationCap,
    dates: 'September 2022 - February 2025',
    title: 'Politecnico di Bari',
    location: 'Bari, Italy',
    description:
      "Master's Degree in Computer Engineering (Cyberphysical Systems)",
  },
  {
    id: '4',
    icon: Rocket,
    dates: 'July 2022 - Now',
    title: 'Leaf s.r.l.',
    location: 'Bari, Italy',
    description: 'Full Stack Developer',
  },
  {
    id: '5',
    icon: GraduationCap,
    dates: 'September 2019 - July 2022',
    title: 'Politecnico di Bari',
    location: 'Bari, Italy',
    description: "Bachelor's Degree in Computer and Automation Engineering",
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Fontanelle',
    description:
      'Worked on this Web App for almost two months. It allows users to find the nearest public fountain, add new ones, vote and report their problems',
    repository: 'https://github.com/aldotestino/fontanelle',
    tags: [
      'Go',
      'React',
      'PostgreSQL',
      'MapBox',
      'Google Cloud',
      'Docker',
      'Nginx',
    ],
    image: fontanelle,
  },
  {
    id: '2',
    title: 'Instant Messaging',
    description:
      'This is one of my first projects. It is a simple instant messaging app that allows users to send messages to each other',
    repository: 'https://github.com/aldotestino/instant-messaging',
    image: instantMessaging,
    tags: ['NodeJS', 'React', 'PostgreSQL', 'Prisma', 'GraphQL', 'Docker'],
  },
  {
    id: '3',
    title: 'Vctmang',
    description:
      'This is a project work for the course of Fondamenti Web at Politecnico di Bari. It is a website for a fictional fast food company',
    repository: 'https://github.com/aldotestino/vcetmang',
    image: vctmang,
    tags: ['NodeJS', 'React', 'MongoDB', 'REST API', 'Socket.io', 'Docker'],
  },
];
