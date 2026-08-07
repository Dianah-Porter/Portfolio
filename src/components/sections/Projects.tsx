import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { GithubIcon } from '@/components/ui/icons'
import { fadeIn } from '@/components/motion/variants'
import { projects, profile } from '@/data/portfolio'
import { cn } from '@/lib/utils'

/**
 * Projects — featured work gets a wide two-column card, the rest sit in a
 * single-column card. Content comes from `projects` in the data file.
 */
export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Applications I designed, built and shipped — from booking flows to service architecture."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Reveal
                key={project.title}
                variants={fadeIn}
                delay={index * 0.1}
                className={cn('h-full', project.featured && 'lg:col-span-1')}
              >
                <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft-lg sm:p-8">
                  <header className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-400 group-hover:text-zinc-950 dark:bg-brand-400/15 dark:text-brand-300 dark:group-hover:text-zinc-950">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {project.category}
                    </span>
                  </header>

                  <h3 className="mt-5 font-display text-xl font-bold text-foreground sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        <span className="leading-relaxed text-muted-foreground">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:border-brand-400/30 dark:bg-brand-400/10 dark:text-brand-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-3 pt-7">
                    {project.repoUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <GithubIcon className="h-4 w-4" />
                          View code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild variant="brand" size="sm">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Live demo
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </article>
              </Reveal>
            )
          })}

          {/* Invitation card fills the trailing grid slot. */}
          <Reveal
            variants={fadeIn}
            delay={projects.length * 0.1}
            className="h-full"
          >
            <div className="flex h-full flex-col items-start justify-center rounded-3xl border border-dashed border-brand-300 bg-brand-50/50 p-8 shadow-soft dark:border-brand-400/30 dark:bg-brand-400/5">
              <h3 className="font-display text-xl font-bold text-foreground">
                More on GitHub
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Coursework, experiments and training projects live in my
                repositories — including the ones I&apos;m still building.
              </p>
              <Button asChild variant="brand" size="sm" className="mt-6">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GithubIcon className="h-4 w-4" />
                  Browse repositories
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
