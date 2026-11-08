import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect.js'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projects from '../data/projects.json'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsSection() {
  const { t } = useTranslation()
  const scopeRef = useRef(null)

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
    <section id="projects" ref={scopeRef} className="scroll-mt-24 bg-white px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {t('site.projects.title')}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.key} data-project className={project.key}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full overflow-hidden  border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
            >
              {project.image && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0  bg-right bg-no-repeat opacity-0 transition duration-300 group-hover:opacity-100 bg-[length:20%_auto]"
                  style={{
                    backgroundImage: `linear-gradient(rgb(255 255 255 / 0.85), rgb(255 255 255 / 0.85)), url('${project.image}')`,
                  }}
                />
              )}
              <h3 className="relative text-lg font-semibold text-slate-900 group-hover:text-blue-800">{project.name}</h3>
              <p className="relative mt-1 text-sm text-slate-500">{project.url.replace('https://', '')}</p>
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
