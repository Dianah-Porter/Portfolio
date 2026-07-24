import { type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { fadeIn } from './variants'

type RevealProps = {
  children: ReactNode
  variants?: Variants
  className?: string
  /** Animate every time it scrolls into view instead of only once. */
  repeat?: boolean
  delay?: number
}

/**
 * Scroll-reveal wrapper. Fades/slides its child into view the moment it
 * enters the viewport. Swap `variants` for slide-in or scale effects.
 */
export function Reveal({
  children,
  variants = fadeIn,
  className,
  repeat = false,
  delay,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount: 0.3 }}
      transition={delay !== undefined ? { delay } : undefined}
    >
      {children}
    </motion.div>
  )
}
