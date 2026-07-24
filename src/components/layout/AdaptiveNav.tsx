import { useEffect, useRef, useState } from 'react'
import { motion, motionValue, type MotionValue } from 'framer-motion'
import { navItems } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

/** Scroll distance (px) over which the nav travels from orbit → top bar. */
const TRANSITION_END = 240
const ICON = 44 // px, matches h-11 w-11
const GAP = 10 // px between icons in the top bar
const SPREAD = 150 // degrees swept by the arc on the right of the avatar
const START = -SPREAD / 2

/** Smoothstep — eases the fly-to-top so it accelerates and settles gently. */
const smooth = (t: number) => t * t * (3 - 2 * t)

type Point = { x: MotionValue<number>; y: MotionValue<number> }

/**
 * A SINGLE set of nav icons whose positions are interpolated every frame
 * between two targets:
 *   • orbit  — an arc hugging the right side of the avatar (progress 0)
 *   • bar    — a centered row fixed to the top of the screen (progress 1)
 * Progress is driven by scroll, so the icons physically glide between the two
 * states instead of snapping. On mobile the bar is always used.
 */
export function AdaptiveNav() {
  const activeId = useActiveSection(navItems.map((item) => item.id))
  const [docked, setDocked] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  // Stable motion values (one x/y per icon) created once.
  const pointsRef = useRef<Point[]>(undefined)
  if (!pointsRef.current) {
    pointsRef.current = navItems.map(() => ({
      x: motionValue(0),
      y: motionValue(0),
    }))
  }
  const points = pointsRef.current

  // Opacity of the top bar's background pill — fades in as the icons dock.
  const bgRef = useRef<MotionValue<number>>(undefined)
  if (!bgRef.current) bgRef.current = motionValue(0)
  const bgOpacity = bgRef.current

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const n = navItems.length
    let raf = 0
    let dockedNow = false

    const frame = () => {
      const vw = window.innerWidth
      const progress = isDesktop
        ? Math.min(1, Math.max(0, window.scrollY / TRANSITION_END))
        : 1
      const e = smooth(progress)
      bgOpacity.set(e)

      // Flip tooltip side once, at the midpoint of the transition.
      const nextDocked = progress > 0.5
      if (nextDocked !== dockedNow) {
        dockedNow = nextDocked
        setDocked(nextDocked)
      }

      // Live avatar position (follows the photo as it scrolls).
      const el = document.getElementById('hero-avatar')
      let cx = vw * 0.75
      let cy = 320
      let radius = 180
      if (el) {
        const r = el.getBoundingClientRect()
        cx = r.left + r.width / 2
        cy = r.top + r.height / 2
        radius = r.width / 2 + 20
      }

      const barWidth = n * ICON + (n - 1) * GAP
      const barStartX = vw / 2 - barWidth / 2

      for (let i = 0; i < n; i++) {
        const angle = ((START + (SPREAD * i) / (n - 1)) * Math.PI) / 180
        const orbitX = cx + radius * Math.cos(angle) - ICON / 2
        const orbitY = cy + radius * Math.sin(angle) - ICON / 2
        const barX = barStartX + i * (ICON + GAP)
        const barY = 16

        points[i].x.set(orbitX + (barX - orbitX) * e)
        points[i].y.set(orbitY + (barY - orbitY) * e)
      }

      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [isDesktop, points, bgOpacity])

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed inset-0 z-50"
    >
      {/* Background pill behind the docked top bar — keeps icons legible. */}
      <motion.div
        aria-hidden
        style={{ opacity: bgOpacity }}
        className="fixed left-1/2 top-2 h-[3.75rem] w-[21rem] max-w-[calc(100vw-1.5rem)] -translate-x-1/2 rounded-full border border-border bg-white/85 shadow-soft-lg backdrop-blur-xl"
      />

      {navItems.map((item, i) => {
        const Icon = item.icon
        const active = activeId === item.id
        return (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            aria-label={item.label}
            aria-current={active ? 'true' : undefined}
            style={{ x: points[i].x, y: points[i].y, left: 0, top: 0 }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.35 + i * 0.06,
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            className={cn(
              'group/nav pointer-events-auto fixed flex h-11 w-11 items-center justify-center rounded-full border shadow-soft backdrop-blur-md transition-colors duration-300',
              active
                ? 'border-transparent bg-brand-400 text-zinc-950 shadow-glow'
                : 'border-white/60 bg-white/70 text-muted-foreground hover:text-foreground',
            )}
          >
            <Icon
              className="h-5 w-5 transition-transform duration-300 group-hover/nav:scale-110"
              strokeWidth={2}
            />

            {/* Tooltip — points left while orbiting, downward once docked. */}
            <span
              role="tooltip"
              className={cn(
                'pointer-events-none absolute z-10 whitespace-nowrap rounded-lg bg-zinc-950 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity duration-200 group-hover/nav:opacity-100',
                docked
                  ? 'left-1/2 top-full mt-3 -translate-x-1/2'
                  : 'right-full top-1/2 mr-3 -translate-y-1/2',
              )}
            >
              {item.label}
            </span>
          </motion.a>
        )
      })}
    </nav>
  )
}
