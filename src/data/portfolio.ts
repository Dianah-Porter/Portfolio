import type { LucideIcon } from 'lucide-react'
import {
  Home,
  User,
  Wrench,
  FolderGit2,
  Briefcase,
  Mail,
  Code,
  Layers,
  Server,
  Database,
  Car,
  Gamepad2,
  Boxes,
  GraduationCap,
  Users,
  Award,
  Rocket,
  Handshake,
  Lightbulb,
} from 'lucide-react'

/**
 * Single source of truth for the portfolio's personal content.
 * Everything rendered on the page reads from this file.
 */
export const profile = {
  greeting: 'HI THERE!',
  name: 'Diane',
  fullName: 'Diane Uwamariya',
  role: 'Full-Stack Developer',
  tagline: 'Frontend · Backend · Mobile',
  bio: 'Information Technology undergraduate building web and mobile products end to end — React and TypeScript on the front, NestJS, Node.js and Spring Boot on the back. I enjoy designing clean REST APIs, modelling databases that hold up, and shipping features people actually use.',
  avatar: '/profiles.jpeg',
  location: 'Kigali, Rwanda',
  email: 'dianahporter@gmail.com',
  phone: '+250 782 866 913',
  phoneHref: '+250782866913',
  github: 'https://github.com/Dianah-Porter',
  /** Drop your PDF at /public/Diane-Uwamariya-CV.pdf to activate this button. */
  resumeUrl: '/Diane-Uwamariya-CV.pdf',
} as const

export type TechBadge = { label: string }

/** Compact stack shown under the hero headline. */
export const techBadges: TechBadge[] = [
  { label: 'React' },
  { label: 'TypeScript' },
  { label: 'NestJS' },
  { label: 'Node.js' },
  { label: 'Spring Boot' },
  { label: 'PostgreSQL' },
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

/* ---------------------------------------------------------------- About -- */

export const aboutParagraphs: string[] = [
  "I'm an Information Technology undergraduate at the University of Rwanda's College of Science and Technology, with hands-on experience building full-stack web and mobile applications.",
  'My work spans both sides of the stack: component-driven interfaces in React, TypeScript and Tailwind CSS, and the services behind them — RESTful APIs, authentication systems, database design and scalable backend architecture in NestJS, Node.js and Spring Boot.',
  "I'm drawn to technology and artificial intelligence as tools for solving real problems, and I've grown just as much through mentoring and team projects as through code. Right now I'm looking for a role where I can keep building things that matter.",
]

export type Highlight = {
  icon: LucideIcon
  title: string
  description: string
}

export const highlights: Highlight[] = [
  {
    icon: Layers,
    title: 'Full-stack delivery',
    description:
      'From React interfaces to NestJS services and PostgreSQL schemas — comfortable owning a feature end to end.',
  },
  {
    icon: Server,
    title: 'API & data design',
    description:
      'RESTful APIs, authentication and authorization flows, and relational database modelling that scales.',
  },
  {
    icon: Handshake,
    title: 'Mentoring & teamwork',
    description:
      'Coached young women in web development and led project teams — I communicate as carefully as I code.',
  },
  {
    icon: Lightbulb,
    title: 'Problem-first mindset',
    description:
      'Passionate about applying software and AI to real-world problems, not technology for its own sake.',
  },
]

export type Stat = { value: string; label: string }

export const stats: Stat[] = [
  { value: '1+ yr', label: 'Hands-on training' },
  { value: '3', label: 'Featured projects' },
  { value: '10+', label: 'Technologies' },
  { value: '2025', label: 'Started mentoring' },
]

/* --------------------------------------------------------------- Skills -- */

export type SkillGroup = {
  title: string
  icon: LucideIcon
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Java', 'JavaScript', 'TypeScript', 'Dart', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Layers,
    skills: [
      'React.js',
      'Flutter',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'State management',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['NestJS', 'Node.js', 'Express.js', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Data & Practices',
    icon: Database,
    skills: [
      'PostgreSQL',
      'Database design',
      'Authentication',
      'Git & GitHub',
      'Agile teamwork',
    ],
  },
]

/* ------------------------------------------------------------- Projects -- */

export type Project = {
  title: string
  category: string
  icon: LucideIcon
  summary: string
  points: string[]
  stack: string[]
  repoUrl?: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Carsharing Platform',
    category: 'Full-stack web app',
    icon: Car,
    summary:
      'A vehicle booking platform where users browse available cars, reserve them for a date range, and manage their bookings from a personal dashboard.',
    points: [
      'Typed React + TypeScript frontend with reusable components and centralised state',
      'NestJS REST API covering vehicles, bookings and user accounts',
      'Authentication with role-based access separating renters from administrators',
      'PostgreSQL schema modelling vehicles, availability and booking history',
    ],
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'REST API'],
    repoUrl: profile.github,
    featured: true,
  },
  {
    title: 'E-commerce Microservices',
    category: 'Backend architecture',
    icon: Boxes,
    summary:
      'An online store split into independent backend services rather than one monolith, so each domain owns its own data and can evolve on its own.',
    points: [
      'Separate services for core domains, each behind its own REST interface',
      'Token-based authentication guarding protected endpoints',
      'Relational data modelling per service with clear ownership boundaries',
      'Consistent error handling and request validation across services',
    ],
    stack: ['Node.js', 'NestJS', 'REST APIs', 'PostgreSQL', 'Microservices'],
    repoUrl: profile.github,
    featured: true,
  },
  {
    title: 'LUGX Gaming',
    category: 'Frontend',
    icon: Gamepad2,
    summary:
      'A gaming storefront interface — browsing games by category, product detail views and a responsive layout that holds together from phone to desktop.',
    points: [
      'Responsive, component-driven layout built from a design reference',
      'Semantic HTML5 and modern CSS3 with a mobile-first breakpoint strategy',
      'Interactive product browsing and filtering in JavaScript',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive design'],
    repoUrl: profile.github,
  },
]

/* ----------------------------------------------------------- Experience -- */

export type ExperienceItem = {
  role: string
  organization: string
  period: string
  icon: LucideIcon
  points: string[]
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Development Trainee',
    organization: 'The Gym Rwanda',
    period: 'May 2025 – Present',
    icon: Rocket,
    points: [
      'Built a full vehicle booking platform with React, TypeScript, NestJS and PostgreSQL as the flagship training project.',
      'Learned component architecture, state management and API integration against real backend services.',
      'Applied frontend best practices: typed props, reusable UI primitives and responsive layouts.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'API integration'],
  },
  {
    role: 'Backend Development Trainee',
    organization: 'The Gym Rwanda',
    period: '2025 – Present',
    icon: Server,
    points: [
      'Developed backend applications with Node.js, NestJS and relational databases.',
      'Designed and consumed REST APIs, including authentication and authorization flows.',
      'Practised database design and backend architecture patterns on team projects.',
    ],
    tags: ['NestJS', 'Node.js', 'REST APIs', 'Authentication'],
  },
  {
    role: 'Mentor & Coach, Software Development',
    organization: 'Young women in tech',
    period: 'August 2025',
    icon: Users,
    points: [
      'Mentored and coached young girls taking their first steps into software development.',
      'Taught HTML, CSS, Tailwind CSS and JavaScript from fundamentals through building real pages.',
      'Broke down technical concepts for absolute beginners and supported them through hands-on practice.',
    ],
    tags: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Mentorship'],
  },
  {
    role: 'Software Development Bootcamp',
    organization: 'SheCanCode',
    period: 'Certification',
    icon: Award,
    points: [
      'Completed an intensive software development bootcamp centred on Java.',
      'Focused on programming fundamentals, problem solving and object-oriented design.',
      'Worked in teams to plan, build and present solutions under deadline.',
    ],
    tags: ['Java', 'Fundamentals', 'Teamwork'],
  },
]

export type EducationItem = {
  school: string
  qualification: string
  period: string
}

export const education: EducationItem[] = [
  {
    school: 'University of Rwanda — College of Science and Technology',
    qualification: "Bachelor's Degree in Information Technology",
    period: 'June 2023 – Present',
  },
  {
    school: 'Groupe Scolaire Notre Dame de Lourdes Byimana',
    qualification: 'Advanced Level Certificate',
    period: '2019 – 2022',
  },
  {
    school: 'Lycée Notre Dame de la Visitation Rulindo',
    qualification: 'Ordinary Level Certificate',
    period: '2016 – 2018',
  },
]

export const educationIcon = GraduationCap
