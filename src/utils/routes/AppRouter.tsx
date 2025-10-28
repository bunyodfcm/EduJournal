import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import MainLayout from "../../layouts/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
