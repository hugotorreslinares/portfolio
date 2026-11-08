import { useTranslation } from 'react-i18next'

const groups = [
  { title: 'skills.frontend', skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Microfrontends'] },
  { title: 'skills.backend', skills: ['Node.js', 'Express', 'PHP', 'Laravel', 'Symfony', 'REST APIs'] },
  { title: 'skills.tools', skills: ['Storybook', 'Jest', 'Vitest', 'PrimeNG', 'Figma', 'Git', 'CI/CD', 'Accessibility'] },
]

export default function SkillsSection() {
  const { t } = useTranslation()

  return (
    <section className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{t('skills.title')}</h2>
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {groups.map((group) => (
            <section key={group.title}>
              <h3 className="mb-4 text-sm font-semibold text-slate-900">{t(group.title)}</h3>
              <ul className="flex flex-wrap gap-x-3 gap-y-2">
                {group.skills.map((skill) => <li key={skill} className="text-sm leading-6 text-slate-600">{skill}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
