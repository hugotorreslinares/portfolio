import { Suspense, lazy } from 'react'
import HeroV2 from './HeroV2.jsx'
import ProjectsSection from './ProjectsSection.jsx'
import SkillsSection from './SkillsSection.jsx'

const ExperienceSection = lazy(() => import('./ExperienceSection'))

const SectionLoading = () => (
  <div className="mx-auto max-w-6xl px-5 py-12 text-sm text-slate-500">Loading experience…</div>
)

export default function HomePageV2() {
  return (
    <main>
      <HeroV2 />
      <Suspense fallback={<SectionLoading />}>
        <ExperienceSection />
      </Suspense>
      <section id="skills" className="scroll-mt-24">
        <SkillsSection />
      </section>
      <ProjectsSection variant="slide" />
    </main>
  )
}
