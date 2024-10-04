import { useState } from "react";
import { Menu, X } from "lucide-react";
import md5 from "md5";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const gravatarEmail = "hugotorreslinares@gmail.com";
  const gravatarUrl = `https://www.gravatar.com/avatar/${md5(
    gravatarEmail.toLowerCase().trim()
  )}?s=100`;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src={gravatarUrl}
            alt="Logo"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="text-2xl font-bold text-blue-600">
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
          } md:flex absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          {["home", "about", "services", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-800 hover:text-blue-600 transition-colors"
              >
                {t(`nav.${item}`)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="fixed right-4 top-1/4 transform -translate-y-1/2 flex flex-col space-y-4">
        <button onClick={() => changeLanguage("es")}>Es</button>
        <button onClick={() => changeLanguage("en")}>En</button>
      </div>
    </header>
  );
}
