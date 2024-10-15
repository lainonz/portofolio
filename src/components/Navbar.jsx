import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Winds, BrandGithub, Envelope } from "@mynaui/icons-react";

const Navbar = ({ github, email }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden text-secondary mb-24 opacity-75 md:flex justify-between font-lexend items-center">
        <div className="flex space-x-3 items-center">
          <Winds />
          <Link to="/" className="font-bold text-2xl">
            Me
          </Link>
        </div>
        <ul className="flex space-x-5 items-center">
          <li>
            <Link to="/skill">Skill / TechStack</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <a href="#">CV</a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <BrandGithub />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Envelope />
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden text-secondary mb-24 opacity-75 font-lexend z-[999]">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <Winds />
            <Link to="/" className="font-bold text-2xl">
              Me
            </Link>
          </div>
          <button onClick={toggleMenu} className="text-2xl">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBarsStaggered} />
          </button>
        </div>
        <div
          className={`fixed inset-0 bg-primary text-secondary transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-[999]`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-7 text-2xl"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="flex flex-col mt-14 items-center p-6 space-y-4 relative">
            {/* Add the close button inside the menu */}
            <Link to="/blog" className="text-lg" onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/project" className="text-lg" onClick={toggleMenu}>
              Projects
            </Link>
            <a href="#" className="text-lg" onClick={toggleMenu}>
              CV
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
              onClick={toggleMenu}
            >
              <BrandGithub />
            </a>
            <a
              href={email}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
              onClick={toggleMenu}
            >
              <Envelope />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
