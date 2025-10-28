import { Icon } from "@iconify/react";

const Footer = () => {
  const socialLinks = [
    { icon: "mdi:instagram", url: "#" },
    { icon: "mdi:facebook", url: "#" },
    { icon: "mdi:telegram", url: "#" },
    { icon: "mdi:youtube", url: "#" },
  ];

  return (
    <footer className="bg-bg-tertiary py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Logo */}
          <div className="flex items-center gap-3">
            <Icon
              icon="mdi:book-open-page-variant-outline"
              className="text-primary"
              width="32"
              height="32"
            />
            <span className="text-white text-xl font-semibold">Jurnal</span>
          </div>

          {/* Center - Copyright */}
          <div className="text-white text-center">
            <p>2025 Barcha huquqlar himoyalangan</p>
          </div>

          {/* Right - Social Media */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-white hover:text-primary transition-colors"
              >
                <Icon icon={link.icon} width="24" height="24" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
