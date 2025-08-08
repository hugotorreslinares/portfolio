import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const frontend = [
  { name: "Vue.js", level: 5 },
  { name: "Angular", level: 4 },
  { name: "React", level: 4 },
  { name: "JavaScript", level: 5 },
  { name: "HTML5", level: 5 },
  { name: "CSS3", level: 5 },
  { name: "Microfrontends", level: 4 },
];

const backend = [
  { name: "PHP", level: 4 },
  { name: "Laravel", level: 3 },
  { name: "Symfony", level: 3 },
  { name: "Node.js", level: 3 },
  { name: "Express", level: 3 },
];

const tools = [
  { name: "PrimeNG", level: 4 },
  { name: "Figma", level: 4 },
  { name: "jQuery", level: 3 },
  { name: "Bootstrap", level: 4 },
  { name: "ExtJS", level: 2 },
  { name: "Hubspot CMS", level: 3 },
  { name: "Unit Testing", level: 4 },
];

const softSkills = [
  { name: "skills.softSkillsList.leadership", level: 5, isTranslation: true },
  { name: "skills.softSkillsList.communication", level: 4, isTranslation: true },
  { name: "skills.softSkillsList.mentoring", level: 4, isTranslation: true },
  { name: "skills.softSkillsList.problemSolving", level: 5, isTranslation: true },
  { name: "skills.softSkillsList.adaptability", level: 5, isTranslation: true },
  { name: "skills.softSkillsList.analyticalThinking", level: 4, isTranslation: true },
  { name: "skills.softSkillsList.teamwork", level: 5, isTranslation: true },
  { name: "skills.softSkillsList.proactivity", level: 5, isTranslation: true },
];

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-zinc-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-zinc-800 dark:text-zinc-100">
          {t('skills.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SkillGroup title={t('skills.frontend')} skills={frontend} />
          <SkillGroup title={t('skills.backend')} skills={backend} />
          <SkillGroup title={t('skills.tools')} skills={tools} />
          <SkillGroup title={t('skills.softSkills')} skills={softSkills} />
        </div>
      </div>
    </section>
  );
};

const SkillGroup = ({ title, skills }) => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-200 mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-center justify-between">
            <span className="text-zinc-700 dark:text-zinc-300">
              {skill.isTranslation ? t(skill.name) : skill.name}
            </span>
            <Stars level={skill.level} />
          </li>
        ))}
      </ul>
    </div>
  );
};

SkillGroup.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      isTranslation: PropTypes.bool
    })
  ).isRequired
};

const Stars = ({ level }) => {
  return (
    <div className="flex space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < level ? "fill-yellow-400" : "fill-zinc-300 dark:fill-zinc-600"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>
  );
};

Stars.propTypes = {
  level: PropTypes.number.isRequired
};

export default SkillsSection;
