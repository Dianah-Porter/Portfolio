import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { fadeIn } from '@/components/motion/variants'
import { skillGroups } from '@/data/portfolio'

/** Skills — one card per discipline, each listing the concrete tools. */
export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-secondary/50 py-24 md:py-28"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          description="The stack I reach for across the frontend, the services behind it, and the data underneath."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map(({ title, icon: Icon, skills }, index) => (
            <Reveal
              key={title}
              variants={fadeIn}
              delay={index * 0.1}
              className="h-full"
            >
              <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-400 group-hover:text-zinc-950 dark:bg-brand-400/15 dark:text-brand-300 dark:group-hover:text-zinc-950">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {title}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-secondary/70 px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
