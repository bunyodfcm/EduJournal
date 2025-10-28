interface MiniUserCardProps {
  image: string;
  name: string;
  title: string;
  className?: string;
}

const MiniUserCard = ({ image, name, title, className }: MiniUserCardProps) => {
  return (
    <div
      className={`w-full bg-bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group relative ${className || ''}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-bg-secondary w-full h-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Text overlay at bottom */}
        <div className="w-full absolute bottom-0 left-0 right-0  backdrop-blur-sm p-1">
          <div className="bg-white/95 rounded-xl px-3 py-2">
            <h3 className="text-text-primary font-semibold mb-1 text-center line-clamp-1" title={name}>{name}</h3>
            <p className="text-text-secondary text-sm text-center line-clamp-2" title={title}>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniUserCard;
