import { useTranslation } from 'react-i18next';
import { experienceData } from '../data/experience';

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="scroll-mt-24 bg-white px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {t("experience.title")}
        </h2>

        <div className="divide-y divide-slate-200">
          {experienceData.map((item) => (
            <article
              key={item.key}
              className={`grid gap-3 py-7 first:pt-0 md:grid-cols-[minmax(10rem,0.75fr)_2fr] md:gap-10`}
            >
              <p className="text-sm font-medium text-slate-500">{t(item.period)}</p>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{t(item.role)}</h3>
                <p className="mt-1 text-sm font-medium text-slate-600">{item.company}</p>
                <p className="mt-3 max-w-3xl leading-7 text-slate-600">{t(item.description)}</p>
                <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5" aria-label={t('experience.technologies')}>
                  {item.tech.slice(0, 6).map((tech) => (
                    <li key={tech} className="text-xs font-medium text-slate-500 after:ml-2 after:text-slate-300 after:content-['·'] last:after:content-none">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
