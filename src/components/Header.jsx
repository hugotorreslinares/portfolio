import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()
  const links = [
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <Analytics />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label={t('nav.label')}>
        <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900" onClick={() => setMenuOpen(false)}>
          {t('site.name')}
        </a>

        <div className="flex items-center gap-5">
          <ul className={`${menuOpen ? 'absolute inset-x-0 top-full flex flex-col border-b border-slate-200 bg-white px-5 py-3 shadow-sm' : 'hidden'} md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            {links.map((link) => (
              <li key={link.href}>
                <a className="block py-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 md:py-0" href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 text-sm" aria-label={t('site.language')}>
            {['en', 'es'].map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => i18n.changeLanguage(language)}
                aria-pressed={i18n.resolvedLanguage?.startsWith(language)}
                className={`rounded px-2 py-1 font-medium uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${i18n.resolvedLanguage?.startsWith(language) ? 'text-slate-950' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {language}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded p-1 text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 md:hidden"
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
