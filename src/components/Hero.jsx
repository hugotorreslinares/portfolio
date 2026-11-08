import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation();
  const email = 'hugotorreslinares@gmail.com'

  return (
    <section id="home" className="scroll-mt-24 border-b border-slate-200 bg-slate-50 px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {t('site.hero.eyebrow') && (
            <p className="mb-5 text-sm font-semibold tracking-wide text-blue-800">{t('site.hero.eyebrow')}</p>
          )}
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            {t('site.hero.title')}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{t('site.hero.subtitle')}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{t('site.hero.description')}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#experience" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
              {t('site.hero.experienceLink')}
            </a>
            <a href={`mailto:${email}`} className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">
              {t('site.hero.contactLink')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
