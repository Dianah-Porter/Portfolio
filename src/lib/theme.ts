export type Theme = 'light' | 'dark'

/** Shared with the inline boot script in index.html — keep the key in sync. */
export const THEME_STORAGE_KEY = 'portfolio-theme'

/**
 * The theme the page booted with: a saved choice if there is one, otherwise
 * whatever the operating system prefers.
 */
export function getInitialTheme(): Theme {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage can throw in private mode — fall through to the OS setting.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

/**
 * Flips the `dark` class Tailwind keys off and tells the browser to render
 * native controls (scrollbars, form widgets) to match.
 */
export function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#0f0f11' : '#F4A621')
}

/**
 * Records an explicit choice. Kept separate from `applyTheme` so that merely
 * rendering the page doesn't count as one — until the visitor actually clicks,
 * the site keeps following the operating system.
 */
export function storeTheme(theme: Theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Not being able to persist is not worth breaking the toggle over.
  }
}

/** True once the visitor has picked a theme by hand. */
export function hasStoredTheme(): boolean {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) !== null
  } catch {
    return false
  }
}
