import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/Layout.jsx'
import FloatingImage from './components/FloatingImage.jsx'

// Lazy load components
const HomePage = lazy(() => import('./components/HomePage.jsx'))
// SkillsSection will be imported/used inside HomePage instead of a separate route

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
)

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        <FloatingImage />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            {/* removed /skills route — SkillsSection is rendered inside HomePage */}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App;
