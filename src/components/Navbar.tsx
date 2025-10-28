import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

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
              <Link to="/" className="hover:text-primary transition-colors">{t('navbar.home')}</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition-colors">{t('navbar.about')}</Link>
            </li>
            <li>
              <Link to="/archive" className="hover:text-primary transition-colors">{t('navbar.archive')}</Link>
            </li>
            <li>
              <Link to="/editorial-office" className="hover:text-primary transition-colors">{t('navbar.editorialOffice')}</Link>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
