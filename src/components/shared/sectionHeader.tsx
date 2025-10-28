import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const SectionHeader = ({
  title,
  description,
  link,
  linkText,
}: {
  title: string;
  description?: string;
  link?: string;
  linkText?: string;
}) => {
  return (
    <div className="flex justify-between items-center py-8">
      <div className="flex flex-col justify-start items-start ">
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
        {description && (
          <p className="max-w-xl text-text-secondary text-sm md:text-base">
            {description}
          </p>
        )}
      </div>
      {link && (
        <Link
          to={link}
          className="text-primary hover:text-primary/80 cursor-pointer transition-colors flex items-center gap-2"
        >
          <span className="text-sm md:text-base">{linkText || "Batafsil"}</span>
          <Icon icon="mdi:arrow-right" width="24" height="24" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
