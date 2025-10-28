import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-text-title">
          {t('about.title')}
        </h1>
        <p className="text-lg text-text-secondary">
          {t('about.description')}
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
