import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

import Blog from "./pages/blogs/index"; // Import komponen Blogs
import Project from "./pages/projects/index"; // Import komponen Blogs
import NotFound from "./pages/NotFound";

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
              <Route path="/blog" element={<Blog />} />
              <Route path="/project" element={<Project />} />
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
