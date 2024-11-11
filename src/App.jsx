import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

import Blog from "./pages/blogs/index";
import Project from "./pages/projects/index";
import NotFound from "./pages/NotFound";

import AdminLogin from "./pages/admin/login";
import Dashboard from "./pages/dashboard/index";
import AdminBlog from "./pages/admin/blog";
import AdminAddBlog from "./pages/admin/addblog";
import ReadBlog from "./pages/blogs/readblog";
import Index from "./pages/techstack/Index";
import Certificate from "./pages/certificate/Index";
function App() {
  const gh = "https://github.com/lainonz";
  const em = "mailto:herlangga.maulani@gmail.com";

  return (
    <>
      <Router>
        <div className="pt-5 px-6 md:px-10 flex flex-col min-h-screen">
          <Navbar github={gh} email={em} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Profile github={gh} email={em} />} />
              <Route path="/skill" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/project" element={<Project />} />
              <Route path="/blogs/:id" element={<ReadBlog />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/0xadmin" element={<AdminLogin />} />
              <Route path="/0xadmindash" element={<Dashboard />} />
              <Route path="/0xadminblog" element={<AdminBlog />} />
              <Route path="/0xadminaddblog" element={<AdminAddBlog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
