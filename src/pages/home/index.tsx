import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-text-title">
          {t('home.title')}
        </h1>
        <p className="text-lg text-text-secondary">
          {t('home.description')}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
