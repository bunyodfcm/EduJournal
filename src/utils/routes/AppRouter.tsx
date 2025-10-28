import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Archive from "../../pages/archive";
import EditorialOffice from "../../pages/editorialOffice";
import MainLayout from "../../layouts/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/editorial-office" element={<EditorialOffice />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
