import { useTranslation } from 'react-i18next';

const EditorialOfficePage = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-text-title">
          {t('navbar.editorialOffice')}
        </h1>
        <p className="text-lg text-text-secondary">
          Editorial office content will be here
        </p>
      </div>
    </div>
  );
};

export default EditorialOfficePage;
