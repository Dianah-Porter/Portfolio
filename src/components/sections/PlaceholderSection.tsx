import { type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { Badge } from '@/components/ui/badge'
import { fadeInScale } from '@/components/motion/variants'

type PlaceholderSectionProps = {
  id: string
  eyebrow: string
  title: string
  description: string
  icon: LucideIcon
  tinted?: boolean
}

/**
 * Lightweight anchor target for the sections you'll flesh out next
 * (About, Skills, Projects, Experience, Contact). Keeps the nav dock,
 * scroll-spy, and reveal animations working end-to-end.
 */
export function PlaceholderSection({
  id,
  eyebrow,
  title,
  description,
  icon: Icon,
  tinted = false,
}: PlaceholderSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 ${tinted ? 'bg-secondary/50' : ''}`}
    >
      <div className="container">
        <Reveal variants={fadeInScale}>
          <div className="glass mx-auto flex max-w-3xl flex-col items-center rounded-3xl border-border/60 bg-card/70 p-10 text-center shadow-soft sm:p-14">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
              <Icon className="h-7 w-7" />
            </div>
            <Badge variant="brand" className="mt-6">
              {eyebrow}
            </Badge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
