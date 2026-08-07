import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { fadeIn, slideInLeft } from '@/components/motion/variants'
import { experience, education, educationIcon } from '@/data/portfolio'

const EducationIcon = educationIcon

/**
 * Experience — a vertical timeline of training, mentoring and bootcamps,
 * followed by a compact academic record.
 */
export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-secondary/50 py-24 md:py-28"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Training, mentoring & milestones"
          description="Where I've learned to build software — and where I've helped others start."
        />

        {/* Timeline */}
        <ol className="relative mx-auto mt-14 max-w-3xl">
          {/* Spine — hidden on small screens where cards stack full width. */}
          <span
            aria-hidden
            className="absolute left-[1.375rem] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent sm:block"
          />

          {experience.map((item, index) => {
            const Icon = item.icon
            return (
              <li key={`${item.role}-${item.organization}`}>
                <Reveal variants={slideInLeft} delay={index * 0.08}>
                  <div className="relative flex gap-5 pb-10 sm:gap-6">
                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-card text-brand-500 shadow-soft sm:flex">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex-1 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft-lg sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                          {item.period}
                        </span>
                        <span className="text-sm font-semibold text-muted-foreground">
                          {item.organization}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-lg font-bold text-foreground sm:text-xl">
                        {item.role}
                      </h3>

                      <ul className="mt-4 space-y-2">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span
                              aria-hidden
                              className="absolute left-0 top-[0.6rem] h-1.5 w-1.5 rounded-full bg-brand-400"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-border bg-secondary/70 px-2.5 py-1 text-xs font-medium text-foreground"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>

        {/* Education */}
        <Reveal variants={fadeIn} className="mx-auto mt-6 max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                <EducationIcon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                Education
              </h3>
            </div>

            <ul className="mt-6 divide-y divide-border">
              {education.map((item) => (
                <li
                  key={item.school}
                  className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                >
                  <div>
                    <p className="font-semibold text-foreground">
                      {item.qualification}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.school}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-brand-600">
                    {item.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
