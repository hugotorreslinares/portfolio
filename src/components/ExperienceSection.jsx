import { useTranslation } from 'react-i18next';

export default function ExperienceSection() {
  const { t } = useTranslation();
  const experience = [
    {
      role: t("experience.role1"),
      company: "Zemoga",
      period: t("experience.period1"),
      description: t("experience.description1"),
      tech: ["Vue.js", "Angular", "React", "Microfrontends", "PrimeNG", "Figma", "HTML5", "CSS3", "Unit Testing", "Jest" ,"Storybook","Git", "Jira", "Confluence", "CI/CD" ,"Agile" ,"Scrum"],
    },
    {
      role: "Web UI Semi Sr - ADV",
      company: "Globant",
      period: t("experience.period2"),
      description: t("experience.description2"),
      tech: ["Angular", "JavaScript", "PHP", "HTML5", "CSS3", "Figma", "Unit Testing","Git", "Jira", "Confluence", "CI/CD" ,"Agile" ,"Scrum"],
    },
    {
      role: t("experience.role3"),
      company: "Quadi SAS",
      period: t("experience.period3"),
      description: t("experience.description3"),
      tech: ["Angular", "HTML5", "CSS3", "PrimeNG", "Figma", "Microfrontends","Git", "Jira", "Confluence", "CI/CD" ,"Agile" ,"Scrum"],
    },
    {
      role: "Inbound Technologist",
      company: "Sancho BBDO",
      period: t("experience.period4"),
      description: t("experience.description4"),
      tech: ["Laravel", "Angular",  "HTML5", "CSS3", "Figma", "Hubspot CMS", "jQuery", "PrimeNG","Gsap","Git", "Jira", "Confluence","Agile" ,"Scrum", "SEO",  "Google Analytics"],
    },
    {
      role: "Development Engineer",
      company: "INP LTDA",
      period: t("experience.period5"),
      description: t("experience.description5"),
      tech: ["Angular", "React", "HTML5", "CSS3", "jQuery", "ExtJS", "Node.js", "Express", "Symfony", "Bootstrap"],
    },
  ];

  return (
    <section className="bg-white dark:bg-zinc-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-zinc-800 dark:text-zinc-100">
          {t("experience.title")}
        </h2>

        <div className="space-y-10">
          {experience.map((item, idx) => (
            <div key={idx} className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6 relative">
              <div className="absolute -left-2.5 top-1 w-4 h-4 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                {item.role}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.company} • {item.period}</p>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">{item.description}</p>
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
