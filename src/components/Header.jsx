import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Analytics } from "@vercel/analytics/react"
import md5 from "md5";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const menuLinks = [
    { text: "home", route: "" },
    // use hash target to scroll to the section on the same page
    { text: "skills", route: "skills" },
  ];

  const gravatarEmail = "hugotorreslinares@gmail.com";
  const gravatarUrl = `https://www.gravatar.com/avatar/${md5(
    gravatarEmail.toLowerCase().trim()
  )}?s=100`;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-700">
      <Analytics />
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src={gravatarUrl}
            alt="Logo"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            {t("site.name")}
          </span>
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex absolute md:relative top-full left-0 right-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm md:bg-transparent shadow-md md:shadow-none border-b border-gray-200 dark:border-zinc-700 md:border-none`}
        >
          {menuLinks.map((item, index) => {
            const href = item.route ? `#${item.route.toLowerCase()}` : "/";
            return (
              <li key={`${item.text}-${index}`}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-slate-700 dark:text-slate-100 hover:text-slate-300 transition-colors"
                >
                  {t(`nav.${item.text}`)}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="fixed right-4 transform pt-4 flex flex-col space-y-2 dark:text-slate-100">
        <button 
          onClick={() => changeLanguage("es")}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-gray-200 dark:border-zinc-600 hover:bg-white dark:hover:bg-zinc-700 transition-all duration-200 shadow-sm hover:shadow-md"
          title="Español"
        >
          <span className="text-lg">🇪🇸</span>
        </button>
        <button 
          onClick={() => changeLanguage("en")}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-gray-200 dark:border-zinc-600 hover:bg-white dark:hover:bg-zinc-700 transition-all duration-200 shadow-sm hover:shadow-md"
          title="English"
        >
          <span className="text-lg">🇺🇸</span>
        </button>
      </div>
    </header>
  );
}
