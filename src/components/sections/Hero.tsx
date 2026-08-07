import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ProfileShowcase } from '@/components/hero/ProfileShowcase'
import { profile, techBadges } from '@/data/portfolio'
import {
  fadeIn,
  slideInLeft,
  staggerContainer,
} from '@/components/motion/variants'

/**
 * Hero — two-column responsive layout.
 * Left: intro copy, tech badges, CTAs. Right: decorative profile showcase.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-14 pb-20 md:pt-16 md:pb-28"
    >
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left column */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div
            variants={slideInLeft}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
            </span>
            <p className="text-xl font-bold uppercase tracking-[0.18em] text-foreground sm:text-2xl">
              {profile.greeting}
            </p>
          </motion.div>

          <motion.h1
            variants={slideInLeft}
            className="mt-4 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl"
          >
            I&apos;M <span className="text-brand-400">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={slideInLeft}
            className="mt-4 text-xl font-semibold text-brand-500 sm:text-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={slideInLeft}
            className="mt-1.5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.bio}
          </motion.p>

          {/* Tech badges */}
          <motion.ul
            variants={staggerContainer}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {techBadges.map((tech) => (
              <motion.li key={tech.label} variants={fadeIn}>
                <Badge
                  variant="outline"
                  className="shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:border-brand-300"
                >
                  {tech.label}
                </Badge>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            variants={fadeIn}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button asChild variant="brand" size="lg">
              <a href="#projects">
                View Projects
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={profile.resumeUrl} download>
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right column */}
        <div className="order-first lg:order-last">
          <ProfileShowcase />
        </div>
      </div>
    </section>
  )
}
