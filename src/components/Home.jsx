import Header from './Header'
import SocialLinks from './SocialLinks'
import Content from './Content'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Header />
      <SocialLinks />
      <Content />
    </div>
  )
}