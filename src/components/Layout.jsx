import Header from './Header'
import SocialLinks from './SocialLinks'
import Content from './Content'

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <SocialLinks />
      {children}
      <Content />
    </div>
  )
}
