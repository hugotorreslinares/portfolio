import { useTranslation } from 'react-i18next';
import { experienceData } from '../data/experience';

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-zinc-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-zinc-800 dark:text-zinc-100">
          {t("experience.title")}
        </h2>

        <div className="space-y-10">
          {experienceData.map((item) => (
            <div key={item.key} className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6 relative">
              <div className="absolute -left-2.5 top-1 w-4 h-4 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                {t(item.role)}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.company} • {t(item.period)}</p>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">{t(item.description)}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
