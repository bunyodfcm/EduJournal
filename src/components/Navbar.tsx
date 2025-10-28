import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="sticky top-6 z-50">
      <div className="container">
        <div className="flex justify-between items-center bg-white p-8 rounded-full border border-border shadow-xs">
          <Link to="/" className="cursor-pointer">
            <img src="/logo.png" alt="logo" className="h-10" />
          </Link>

          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors px-5 py-2 rounded-full hover:bg-primary/10 hover:text-primary ${
                    isActive ? "bg-primary text-white font-semibold" : ""
                  }`
                }
              >
                {t("navbar.home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors px-5 py-2 rounded-full hover:bg-primary/10 hover:text-primary ${
                    isActive ? "bg-primary text-white font-semibold" : ""
                  }`
                }
              >
                {t("navbar.about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/archive"
                className={({ isActive }) =>
                  `transition-colors px-5 py-2 rounded-full hover:bg-primary/10 hover:text-primary ${
                    isActive ? "bg-primary text-white font-semibold" : ""
                  }`
                }
              >
                {t("navbar.archive")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/editorial-office"
                className={({ isActive }) =>
                  `transition-colors px-5 py-2 rounded-full hover:bg-primary/10 hover:text-primary ${
                    isActive ? "bg-primary text-white font-semibold" : ""
                  }`
                }
              >
                {t("navbar.editorialOffice")}
              </NavLink>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
