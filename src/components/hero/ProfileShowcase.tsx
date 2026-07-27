import { motion } from 'framer-motion'
import { Sparkles, Terminal } from 'lucide-react'
import { profile } from '@/data/portfolio'
import { easeSmooth } from '@/components/motion/variants'

/**
 * Right-column visual: a large circular portrait framed by concentric
 * decorative rings, a rotating dashed orbit, and floating geometric accents.
 */
export function ProfileShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: easeSmooth }}
      className="relative mx-auto flex aspect-square w-full max-w-[26rem] items-center justify-center"
    >
      {/* Soft ambient glow */}
      <div className="absolute inset-6 rounded-full bg-brand-300/40 blur-3xl" />

      {/* Concentric decorative outlines */}
      <div className="absolute inset-0 rounded-full border border-brand-200/60" />

      {/* Orange orbit line the nav icons ride on. */}
      <div className="absolute inset-6 rounded-full border-2 border-brand-400/70" />

      {/* Rotating dashed orbit with a traveling dot */}
      <div className="absolute inset-2 animate-spin-slow rounded-full border border-dashed border-brand-300/40">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-400 shadow-glow" />
      </div>

      {/* Portrait — id is the anchor the nav orbits around. */}
      <div
        id="hero-avatar"
        className="relative h-[78%] w-[78%] overflow-hidden rounded-full border-4 border-white bg-secondary shadow-soft-lg"
        style={{ perspective: '1000px' }}
      >
        <img
          src={profile.avatar}
          alt={`Portrait of ${profile.name}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out"
          loading="eager"
          style={{
            transform: 'rotateX(30deg) scale(1.18)',
            transformOrigin: 'center',
          }}
        />
      </div>

      {/* Floating geometric accents — kept to the LEFT so the nav can orbit
          the right side of the photo without colliding. */}
      <FloatingAccent className="-left-2 top-10" delay={0}>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-brand-400 shadow-soft">
          <Terminal className="h-6 w-6" />
        </div>
      </FloatingAccent>

      <FloatingAccent className="bottom-6 left-4" delay={0.3}>
        <div className="glass flex items-center gap-2 rounded-full px-3.5 py-2 shadow-soft">
          <Sparkles className="h-4 w-4 text-brand-500" />
          <span className="text-xs font-semibold text-foreground">
            Open to work
          </span>
        </div>
      </FloatingAccent>

      {/* Small solid dots for extra depth (left side only) */}
      <span className="absolute left-8 top-2 h-3 w-3 rounded-full bg-brand-400" />
      <span className="absolute bottom-4 left-24 h-2 w-2 rounded-full bg-zinc-900/70" />
    </motion.div>
  )
}

function FloatingAccent({
  children,
  className,
  delay,
}: {
  children: React.ReactNode
  className?: string
  delay: number
}) {
  return (
    <motion.div
      className={`absolute ${className ?? ''}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.7 + delay, ease: easeSmooth }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
