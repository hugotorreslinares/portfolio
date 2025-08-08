import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './components/HomePage.jsx'
import SkillsSection from './components/SkillsSection.jsx'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/skills" element={<SkillsSection />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
