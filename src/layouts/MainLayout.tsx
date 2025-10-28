// src/layouts/MainLayout.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode; // Sahifadan keladigan kontent
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Har sahifada bor */}
      <main className="flex-1">{children}</main> {/* Har safar o‘zgaradi */}
      <Footer /> {/* Har sahifada bor */}
    </div>
  );
}
