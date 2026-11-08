import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'

const email = 'hugotorreslinares@gmail.com'

export default function HeroV2() {
  const { t } = useTranslation()
  const scopeRef = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
        .from('[data-hero="text"] > *', { y: 24, opacity: 0, stagger: 0.12 })
        .from('[data-hero="image"]', { x: 40, opacity: 0, duration: 1 }, '-=0.6')
    }, scopeRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={scopeRef}
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-200 bg-slate-950 bg-cover bg-center px-5 py-16 md:py-24"
      style={{ backgroundImage: "url('/images/hero-code.jpg')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-slate-950/80" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div data-hero="text">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {t('site.hero.title')}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{t('site.hero.subtitle')}</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">{t('site.hero.description')}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#experience"
              className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              {t('site.hero.experienceLink')}
            </a>
            <a
              href={`mailto:${email}`}
              className="text-sm font-semibold text-slate-200 underline decoration-slate-500 underline-offset-4 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              {t('site.hero.contactLink')}
            </a>
          </div>
        </div>

        <div data-hero="image" className="flex justify-center md:justify-end">
          <img
            src="/images/hugo.png"
            alt={t('site.hero.imageAlt')}
            className="aspect-square w-full max-w-sm rounded-2xl object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  )
}
