import { Icon } from "@iconify/react";
import SectionHeader from "../../../components/shared/sectionHeader";

const ArchiveSection = () => {
  // Mock data - journal covers (4 items max)
  const journalCovers = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    issue: `${i + 1}/10`,
  }));

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader title="Arxiv" link="/journals" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journalCovers.map((journal) => (
            <div
              key={journal.id}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              {/* Journal Cover */}
              <div className="bg-primary/20 rounded-lg border border-border p-6 mb-4 h-96 relative overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-primary/10"></div>

                {/* Journal title */}
                <div className="relative z-10 text-center mb-8">
                  <h3 className="text-white text-sm font-bold tracking-wide mb-1">
                    JOURNAL OF
                  </h3>
                  <h3 className="text-white text-lg font-bold tracking-wide">
                    MAMUN SCIENCE
                  </h3>
                </div>

                {/* Scientific icons */}
                <div className="relative z-10 flex items-end justify-center gap-3 mt-12">
                  <div className="flex flex-col items-center">
                    <Icon
                      icon="carbon:atom"
                      className="text-white w-10 h-10 mb-1"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <Icon
                      icon="carbon:dna"
                      className="text-white w-14 h-14 mb-1"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <Icon
                      icon="carbon:hybrid-cloud"
                      className="text-white w-10 h-10 mb-1"
                    />
                  </div>
                </div>

                {/* Pagination */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs">
                  {journal.issue}
                </div>
              </div>

              {/* Journal info */}
              <div className="text-center">
                <p className="text-text-secondary">{journal.title}</p>
                <p className="text-text-secondary">{journal.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchiveSection;
