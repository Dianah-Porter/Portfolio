import { useMemo, type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { fadeIn } from './variants'

type RevealProps = {
  children: ReactNode
  variants?: Variants
  className?: string
  /** Animate every time it scrolls into view instead of only once. */
  repeat?: boolean
  /** Seconds to wait before animating in — used to stagger sibling cards. */
  delay?: number
}

/**
 * Scroll-reveal wrapper. Fades/slides its child into view the moment it
 * enters the viewport. Swap `variants` for slide-in or scale effects.
 *
 * The delay is merged into the variant's own transition rather than passed as
 * a `transition` prop, because a variant-level transition would override it.
 */
export function Reveal({
  children,
  variants = fadeIn,
  className,
  repeat = false,
  delay,
}: RevealProps) {
  const resolved = useMemo<Variants>(() => {
    if (!delay) return variants

    const visible = variants.visible
    if (typeof visible !== 'object' || visible === null) return variants

    return {
      ...variants,
      visible: {
        ...visible,
        transition: { ...(visible.transition ?? {}), delay },
      },
    }
  }, [variants, delay])

  return (
    <motion.div
      className={className}
      variants={resolved}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
