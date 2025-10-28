import MiniUserCard from "../../../components/shared/miniUserCard";
import SectionHeader from "../../../components/shared/sectionHeader";

const EditorialBoard = () => {
  // Mock data for editorial team
  const editors = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    name: "Benedict Camberbadge Olsen",
    title: "Doctor of Physical and Mathematical Sciences, Editor in chief",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
  }));

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <SectionHeader title="Tahririyat" link="/editorial-board" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editors.map((editor) => (
            <MiniUserCard
              key={editor.id}
              image={editor.image}
              name={editor.name}
              title={editor.title}
              className="h-80"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorialBoard;
