import { Reveal } from '@/components/motion/Reveal'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  /** Centre the block instead of aligning it to the start. */
  align?: 'start' | 'center'
  className?: string
}

/** Shared eyebrow + title + intro used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      <Badge variant="brand">{eyebrow}</Badge>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
      <span
        aria-hidden
        className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-brand-400 to-brand-200"
      />
    </Reveal>
  )
}
