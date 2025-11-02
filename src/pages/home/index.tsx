import HomeBanner from "./components/home-banner";
import AcademicPlatforms from "./components/academic-platforms";
import ArchiveSection from "./components/archive-section";
import EditorialBoard from "./components/editorial-board";
import AboutJournal from "./components/about-journal";
import ContactSection from "./components/ContactSection";
import { useContent } from "../../utils/hooks/useContent";
// import { useLangData } from "../../utils/hooks/useLangData";
// import { useSingleUser } from "../../utils/hooks/useSingleUser";

const HomePage: React.FC = () => {
  const { content, loading, employees, error } =
    useContent("activity/journals");
  // console.log(employees as any);

  // const langData = useLangData((content as any)?.data.editors.items[0]);

  // const { user } = useSingleUser("8538");

  // console.log(user, "user");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-12">
      <HomeBanner meta={(content as any)?.data?.meta} />
      <AcademicPlatforms />
      <AboutJournal />
      <ArchiveSection />
      <EditorialBoard />
      <ContactSection />
    </div>
  );
};

export default HomePage;
