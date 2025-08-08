import { Suspense, lazy } from 'react'

// Lazy load ExperienceSection
const ExperienceSection = lazy(() => import('./ExperienceSection'))

// Loading component
const SectionLoading = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
  </div>
)

export default function HomePage() {
  return (
    <Suspense fallback={<SectionLoading />}>
      <ExperienceSection />
    </Suspense>
  )
}
