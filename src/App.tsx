import { User, Wrench, FolderGit2, Briefcase, Mail } from 'lucide-react'
import { AdaptiveNav } from '@/components/layout/AdaptiveNav'
import { Hero } from '@/components/sections/Hero'
import { PlaceholderSection } from '@/components/sections/PlaceholderSection'
import { profile } from '@/data/portfolio'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <AdaptiveNav />

      <main>
        <Hero />

        <PlaceholderSection
          id="about"
          eyebrow="About"
          title="A bit about me"
          description="This is where your story goes — your journey into software, what drives you, and the kind of problems you love to solve."
          icon={User}
        />

        <PlaceholderSection
          id="skills"
          eyebrow="Skills"
          title="Tools I build with"
          description="Showcase your technical stack, proficiencies, and the technologies you reach for when architecting reliable systems."
          icon={Wrench}
          tinted
        />

        <PlaceholderSection
          id="projects"
          eyebrow="Projects"
          title="Things I've shipped"
          description="Feature your best work here — case studies, live demos, and repositories that demonstrate the depth of your engineering."
          icon={FolderGit2}
        />

        <PlaceholderSection
          id="experience"
          eyebrow="Experience"
          title="Where I've worked"
          description="A timeline of your roles, education, and milestones — the experiences that shaped how you build software today."
          icon={Briefcase}
          tinted
        />

        <PlaceholderSection
          id="contact"
          eyebrow="Contact"
          title="Let's build together"
          description="Add a contact form or your links so people can reach you. Ready when you are to turn an idea into something real."
          icon={Mail}
        />
      </main>

      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Crafted with care.
          </p>
          <p>Built with React, TypeScript, Tailwind &amp; Framer Motion.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
