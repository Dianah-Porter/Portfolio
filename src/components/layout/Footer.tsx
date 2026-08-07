import { Mail, Phone, ArrowUp } from 'lucide-react'
import { GithubIcon } from '@/components/ui/icons'
import { profile, navItems } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl font-extrabold tracking-tight text-foreground">
              {profile.fullName}
            </p>
            <p className="mt-1 text-sm font-semibold text-brand-500">
              {profile.role} · {profile.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Building web and mobile products end to end — and always up for a
              conversation about a new one.
            </p>

            <div className="mt-5 flex gap-3">
              <IconLink
                href={`mailto:${profile.email}`}
                label="Email Diane"
              >
                <Mail className="h-4 w-4" />
              </IconLink>
              <IconLink href={`tel:${profile.phoneHref}`} label="Call Diane">
                <Phone className="h-4 w-4" />
              </IconLink>
              <IconLink href={profile.github} label="GitHub profile" external>
                <GithubIcon className="h-4 w-4" />
              </IconLink>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3 md:grid-cols-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <p className="hidden sm:block">
              Built with React, TypeScript &amp; Tailwind CSS.
            </p>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-brand-300 hover:text-brand-500"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function IconLink({
  href,
  label,
  external,
  children,
}: {
  href: string
  label: string
  external?: boolean
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-500"
    >
      {children}
    </a>
  )
}
