import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { GithubIcon } from '@/components/ui/icons'
import { slideInLeft, slideInRight } from '@/components/motion/variants'
import { profile } from '@/data/portfolio'

const inputClass =
  'w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-soft outline-none transition-colors duration-200 placeholder:text-muted-foreground focus:border-brand-300 focus:ring-2 focus:ring-brand-200'

/**
 * Contact — details on the left, a message form on the right.
 * The form has no backend: it composes a pre-filled mailto: so the visitor's
 * own mail client sends the message. Nothing to deploy, nothing to expire.
 */
export function Contact() {
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')

    const subject = `Portfolio enquiry from ${name}`
    const body = `${message}\n\n—\n${name}\n${email}`

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    window.setTimeout(() => setSent(false), 6000)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard permission denied — the mailto link below still works.
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="I'm open to junior and internship roles, freelance work and collaboration. Tell me what you're working on."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Details */}
          <Reveal variants={slideInLeft}>
            <div className="space-y-4">
              <ContactRow
                icon={Mail}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                action={
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-brand-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                }
              />
              <ContactRow
                icon={Phone}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phoneHref}`}
              />
              <ContactRow
                icon={MapPin}
                label="Location"
                value={profile.location}
              />
              <ContactRow
                icon={GithubIcon}
                label="GitHub"
                value={profile.github.replace('https://', '')}
                href={profile.github}
                external
              />
            </div>

            <div className="mt-6 rounded-3xl border border-brand-200 bg-brand-50/60 p-6">
              <p className="flex items-center gap-2 font-display text-sm font-bold text-foreground">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
                </span>
                Available for work
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Currently completing my degree in Kigali and open to
                opportunities — remote or on-site. I usually reply within a day.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal variants={slideInRight}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about the role or project…"
                  className={`${inputClass} resize-y`}
                />
              </div>

              <Button type="submit" variant="brand" size="lg" className="mt-6">
                <Send className="h-4 w-4" />
                Send message
              </Button>

              <p
                role="status"
                aria-live="polite"
                className="mt-4 min-h-[1.25rem] text-sm text-muted-foreground"
              >
                {sent
                  ? 'Your mail app should be opening with the message ready to send.'
                  : `Opens your mail app addressed to ${profile.email}.`}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

type ContactRowProps = {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
  external?: boolean
  action?: React.ReactNode
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
  action,
}: ContactRowProps) {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-400 group-hover:text-zinc-950">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="truncate font-medium text-foreground">{value}</p>
      </div>
    </>
  )

  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft-lg">
      {href ? (
        <a
          href={href}
          {...(external
            ? { target: '_blank', rel: 'noreferrer noopener' }
            : {})}
          className="flex min-w-0 flex-1 items-center gap-4 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {content}
        </a>
      ) : (
        <div className="flex min-w-0 flex-1 items-center gap-4">{content}</div>
      )}
      {action}
    </div>
  )
}
