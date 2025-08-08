import { Suspense, lazy } from 'react'

// Lazy load layout components
const Header = lazy(() => import('./Header'))
const SocialLinks = lazy(() => import('./SocialLinks'))
const Content = lazy(() => import('./Content'))

// Loading component for layout parts
const LayoutLoading = () => (
  <div className="flex items-center justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
  </div>
)

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Suspense fallback={<LayoutLoading />}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<LayoutLoading />}>
        <SocialLinks />
      </Suspense>
      
      {children}
      
      <Suspense fallback={<LayoutLoading />}>
        <Content />
      </Suspense>
    </div>
  )
}
