import { Suspense, lazy } from 'react'

// Lazy load ExperienceSection
const ExperienceSection = lazy(() => import('./ExperienceSection'))
import SkillsSection from './SkillsSection.jsx'

// Loading component
const SectionLoading = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
  </div>
)

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<SectionLoading />}>
        <ExperienceSection />
      </Suspense>
      
      {/* target for header #skills link */}
      <section id="skills">
        <SkillsSection />
      </section>
    </main>
  )
}
