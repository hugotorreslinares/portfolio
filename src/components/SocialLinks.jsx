import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'

export default function SocialLinks() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
     
      <a href="https://www.instagram.com/atorreslinares/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-6 h-6 text-red-600 hover:text-red-800 transition-colors" />
      </a>
      <a href="https://www.linkedin.com/in/hugotorreslinares/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6 text-blue-800 hover:text-blue-900 transition-colors" />
      </a>
      <a href="https://github.com/hugotorreslinares" aria-label="Github" target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6 text-blue-800 hover:text-blue-900 transition-colors" />
      </a>
    </div>
  )
}