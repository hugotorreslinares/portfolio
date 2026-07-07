import { useTranslation } from "react-i18next";
import md5 from "md5";

export default function Hero() {
  const { t } = useTranslation();
  const gravatarEmail = "hugotorreslinares@gmail.com";
  const gravatarUrl = `https://www.gravatar.com/avatar/${md5(
    gravatarEmail.toLowerCase().trim()
  )}?s=200`;

  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="relative group animate-fade-in-up">
          {/* Glowing Gradient Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative flex flex-col md:flex-row items-center gap-12 bg-black/80 dark:bg-zinc-900/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-200/50 dark:border-zinc-800/50 shadow-2xl">
            {/* Gravatar Image */}
            <div className="relative flex-shrink-0 animate-fade-in-down">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src={gravatarUrl}
                alt="Hugo Torres"
                className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white dark:border-zinc-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  {t("site.hero.title")}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
                {t("site.hero.subtitle")}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-3xl">
                {t("site.hero.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
