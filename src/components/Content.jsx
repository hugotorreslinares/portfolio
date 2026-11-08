import { useTranslation } from 'react-i18next'

export default function Content() {
  const { t } = useTranslation()

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-slate-200 bg-white px-5 py-12 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">{t('site.contact.title')}</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">{t('site.contact.description')}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          <a className="underline decoration-slate-300 underline-offset-4 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700" href="mailto:hugotorreslinares@gmail.com">{t('site.contact.email')}</a>
          <a className="underline decoration-slate-300 underline-offset-4 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700" href="https://www.linkedin.com/in/hugotorreslinares/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="underline decoration-slate-300 underline-offset-4 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700" href="https://github.com/hugotorreslinares" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
