import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../../Context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">

       <div className="max-w-[1400px] mx-auto px-8 lg:px-20 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-4xl font-extrabold text-blue-500 tracking-wide"
        >
          ND
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">

          <li><a href="#home" className="hover:text-blue-500 duration-300">Home</a></li>

          <li><a href="#about" className="hover:text-blue-500 duration-300">About</a></li>

          <li><a href="#education" className="hover:text-blue-500 duration-300">Education</a></li>

          <li><a href="#skills" className="hover:text-blue-500 duration-300">Skills</a></li>

          <li><a href="#projects" className="hover:text-blue-500 duration-300">Projects</a></li>

    
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <button className="text-2xl">
  <FaMoon />
</button>
          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">

          <ul className="flex flex-col items-center py-6 gap-6 text-lg">

            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>

            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>

            <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>

            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>

            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>

      

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;