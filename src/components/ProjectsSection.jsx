import { useRef, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect.js'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projects from '../data/projects.json'

gsap.registerPlugin(ScrollTrigger)

const HOVER_IMAGE_CLASSES = {
  fade: 'opacity-0 transition duration-300 group-hover:opacity-100',
  slide: 'translate-x-full transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:translate-x-0',
}

export default function ProjectsSection({ variant = 'fade' }) {
  const { t, i18n } = useTranslation()
  const scopeRef = useRef(null)
  const lang = i18n.language?.split('-')[0]
  const [fill, setFill] = useState({ color: null, open: false })
  const fillEnabled = variant === 'slide'

  const openFill = (color) => fillEnabled && setFill({ color, open: true })
  const closeFill = () => fillEnabled && setFill((current) => ({ ...current, open: false }))

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('[data-project]', {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: scopeRef.current, start: 'top 80%' },
      })
    }, scopeRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={scopeRef} className="relative scroll-mt-24 overflow-hidden bg-white px-5 py-16 md:py-20">
      {fillEnabled && (
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-[clip-path] duration-500 ease-out motion-reduce:transition-none"
          style={{
            backgroundColor: fill.color ?? 'transparent',
            clipPath: fill.open ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)',
          }}
        />
      )}
      <div className="relative mx-auto max-w-6xl">
        <h2
          className={`mb-10 text-2xl font-semibold tracking-tight md:text-3xl transition-colors duration-500 ${
            fill.open ? 'text-white' : 'text-slate-900'
          }`}
        >
          {t('site.projects.title')}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.key}
              data-project
              className={project.key}
              onMouseEnter={() => openFill(project.color)}
              onMouseLeave={closeFill}
              onFocus={() => openFill(project.color)}
              onBlur={closeFill}
            >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full overflow-hidden  border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1  hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
            >
              {project.image && (
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-right bg-no-repeat bg-[length:20%_auto] ${HOVER_IMAGE_CLASSES[variant]}`}
                  style={{
                    backgroundImage: `linear-gradient(rgb(255 255 255 / 0.85), rgb(255 255 255 / 0.85)), url('${project.image}')`,
                  }}
                />
              )}
              <h3 className="relative text-lg font-semibold text-slate-900 group-hover:text-blue-800">{project.name}</h3>
              <p className="relative mt-1 text-sm text-slate-500">{project.description[lang] ?? project.description.en}</p>
              <span className="relative mt-6 inline-block text-sm font-semibold text-blue-800">
                {t('site.projects.visit')} ↗
              </span>
            </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
