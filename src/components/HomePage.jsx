import { Suspense, lazy } from 'react'
import Hero from './Hero.jsx'
import SkillsSection from './SkillsSection.jsx'

// Lazy load ExperienceSection
const ExperienceSection = lazy(() => import('./ExperienceSection'))

// Loading component
const SectionLoading = () => (
    <div className="mx-auto max-w-6xl px-5 py-12 text-sm text-slate-500">
      Loading experience…
  </div>
)

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionLoading />}>
        <ExperienceSection />
      </Suspense>
      
      {/* target for header #skills link */}
      <section id="skills" className="scroll-mt-24">
        <SkillsSection />
      </section>
    </main>
  )
}
