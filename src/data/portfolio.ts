import type { LucideIcon } from 'lucide-react'
import {
  Home,
  User,
  Wrench,
  FolderGit2,
  Briefcase,
  Mail,
} from 'lucide-react'

/**
 * Single source of truth for the portfolio's personal content.
 * ✏️  Update the values below with your own details.
 */
export const profile = {
  greeting: 'HI THERE!',
  // 👇 Replace with your full name.
  name: 'Diane',
  role: 'Backend & Full-Stack Developer',
  bio: "I design and ship reliable, well-architected backend systems and APIs — turning complex requirements into clean, scalable services. I care about developer experience, performance, and code that ages well.",
  avatar: '/profiles.jpeg', // Drop your own photo in /public and point this here.
  location: 'Kigali, Rwanda',
  email: 'dianahporter@gmail.com',
  resumeUrl: '#',
} as const

export type TechBadge = {
  label: string
}

export const techBadges: TechBadge[] = [
  { label: 'NestJS' },
  { label: 'Spring Boot' },
  { label: 'Node.js' },
  { label: 'PostgreSQL' },
  { label: 'Docker' },
  { label: 'TypeScript' },
]

export type NavItem = {
  id: string
  label: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
]
