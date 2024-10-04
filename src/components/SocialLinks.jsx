import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function SocialLinks() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
      <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800 transition-colors" />
      </a>
      <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-600 transition-colors" />
      </a>
      <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-800 transition-colors" />
      </a>
      <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6 text-blue-800 hover:text-blue-900 transition-colors" />
      </a>
    </div>
  )
}