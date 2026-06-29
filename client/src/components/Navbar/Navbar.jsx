import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-3xl font-black text-emerald-300">
          Tushar<span className="text-white">.</span>
        </a>

        <ul className="hidden md:flex gap-10 text-slate-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-emerald-300 transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download="Tushar_Patel_Resume.pdf"
          className="hidden md:block bg-emerald-500 px-5 py-2 rounded-md hover:bg-emerald-600 transition font-semibold"
        >
          Download Resume
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-slate-300 hover:bg-slate-900 hover:text-emerald-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download="Tushar_Patel_Resume.pdf"
            onClick={() => setOpen(false)}
            className="block mx-6 my-4 text-center bg-emerald-500 px-5 py-2 rounded-md hover:bg-emerald-600 transition font-semibold"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
