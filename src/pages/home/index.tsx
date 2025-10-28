import HomeBanner from "./components/home-banner";
import AcademicPlatforms from "./components/academic-platforms";
import ArchiveSection from "./components/archive-section";
import EditorialBoard from "./components/editorial-board";
import AboutJournal from "./components/about-journal";

const HomePage = () => {
  return (
    <div className="py-12">
      <HomeBanner />
      <AcademicPlatforms />
      <AboutJournal />
      <ArchiveSection />
      <EditorialBoard />
    </div>
  );
};

export default HomePage;
