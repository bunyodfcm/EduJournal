import { bannerImage } from "../../../assets/images-links";

const AcademicPlatforms = () => {
  const platforms = [
    {
      name: "Google Scholar",
      icon: "logos:google-scholar",
    },
    {
      name: "Crossref",
      icon: "simple-icons:crossref",
    },
    {
      name: "Zenodo",
      icon: "simple-icons:zenodo",
    },
    {
      name: "OpenAIRE",
      icon: "simple-icons:openaire",
    },
  ];

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="border border-border rounded-lg p-3 flex items-center gap-4 hover:border-primary transition-colors cursor-pointer group"
          >
            <div className="bg-bg-secondary rounded-lg p-3 group-hover:bg-primary/10 transition-colors">
              <img
                src={bannerImage}
                alt={platform.name}
                className="w-10 h-10"
              />
            </div>
            <span className="text-text-primary font-medium">
              {platform.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicPlatforms;
