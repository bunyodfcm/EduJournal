import { Icon } from "@iconify/react";

const Button = ({
  text,
  iconLeft,
  iconRight,
  onClick,
  className,
}: {
  text?: string;
  iconLeft?: string;
  iconRight?: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={`bg-primary text-white px-6 py-3 rounded-md flex items-center gap-2 cursor-pointer hover:bg-primary/10 hover:text-primary hover:shadow-xl transition-colors w-fit ${className}`}
      onClick={onClick}
    >
      {iconLeft && <Icon icon={iconLeft} width="20" height="20" />}
      {text ? <span className="text-sm">{text}</span> : "Batafsil"}
      {iconRight && <Icon icon={iconRight} width="20" height="20" />}
    </button>
  );
};

export default Button;
