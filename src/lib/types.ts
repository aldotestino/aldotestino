import type { LucideIcon } from 'lucide-react';
import type { StaticImageData } from 'next/image';

export type Experience = {
  id: string;
  icon: LucideIcon;
  title: string;
  location: string;
  description: string;
  dates: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  repository?: string;
  deployment?: string;
  tags: string[];
  image: StaticImageData;
};
