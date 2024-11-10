import type { Experience } from '@/lib/types';
import { Briefcase, GraduationCap, Rocket } from 'lucide-react';

export const experiences: Experience[] = [{
  id: '1',
  icon: Briefcase,
  dates: 'October 2024 - Now',
  title: 'Olivetti',
  location: 'Bari, Italy',
  description: 'I cover the position of PaaS/SaaS Solution Designer in the IT Operation Team',
}, {
  id: '2',
  icon: GraduationCap,
  dates: 'September 2022 - Now',
  title: 'Politecnico di Bari',
  location: 'Bari, Italy',
  description: 'I am pursuing a master\'s degree in Computer Engineering with a specialization in the Cyberphysical Systems curriculum.',
}, {
  id: '3',
  icon: Rocket,
  dates: 'July 2022 - Now',
  title: 'Leaf s.r.l.',
  location: 'Bari, Italy',
  description: 'I work as a full stack developer using tools such as Express, React, MongoDB and Docker',
}, {
  id: '4',
  icon: GraduationCap,
  dates: 'September 2019 - July 2022',
  title: 'Politecnico di Bari',
  location: 'Bari, Italy',
  description: 'Graduated with a score of 110 cum laude in Computer and Automation Engineering.',
}];
