import { MapPin, Mail, GraduationCap, Download } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { GithubIcon } from '@/components/ui/icons'
import { slideInLeft, slideInRight } from '@/components/motion/variants'
import { profile, aboutParagraphs, highlights, stats } from '@/data/portfolio'

const quickFacts = [
  { icon: MapPin, label: profile.location },
  { icon: GraduationCap, label: 'BSc Information Technology' },
  { icon: Mail, label: profile.email },
]

/** About — narrative on the left, capability cards and stats on the right. */
export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="A bit about me"
          description="Full-stack developer in Kigali, building for the web and mobile."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Narrative */}
          <Reveal variants={slideInLeft}>
            <div className="space-y-5">
              {aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {quickFacts.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft"
                >
                  <Icon className="h-4 w-4 text-brand-500" />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="brand">
                <a href={profile.resumeUrl} download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </Reveal>

          {/* Capability cards + stats */}
          <Reveal variants={slideInRight}>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-400 group-hover:text-zinc-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-secondary/60 px-4 py-5 text-center"
                >
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-extrabold text-brand-500">
                      {value}
                    </span>
                    <span className="mt-1 block text-xs font-medium leading-tight text-muted-foreground">
                      {label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
