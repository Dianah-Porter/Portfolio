import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import {
  applyTheme,
  getInitialTheme,
  hasStoredTheme,
  storeTheme,
  type Theme,
} from '@/lib/theme'

/**
 * Floating light/dark switch. Sits bottom-right so it never collides with the
 * nav — which orbits the hero portrait before docking to the top of the screen.
 *
 * The initial class is set by the inline script in index.html so the page never
 * flashes the wrong theme; this component only takes over once React mounts.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  // Follow the OS while the visitor hasn't made an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) => {
      if (hasStoredTheme()) return
      setTheme(event.matches ? 'dark' : 'light')
    }

    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const isDark = theme === 'dark'

  const toggle = () => {
    const next: Theme = isDark ? 'light' : 'dark'
    storeTheme(next)
    setTheme(next)
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
      whileTap={{ scale: 0.92 }}
      className="group fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-soft-lg backdrop-blur-xl transition-colors duration-300 hover:border-brand-300 hover:text-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-7 sm:right-7"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </motion.span>
      </AnimatePresence>

      {/* Label on hover, mirroring the nav's tooltip treatment. */}
      <span
        role="tooltip"
        className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-zinc-950 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 dark:bg-zinc-800"
      >
        {isDark ? 'Light mode' : 'Dark mode'}
      </span>
    </motion.button>
  )
}
