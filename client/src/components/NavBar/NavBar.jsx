import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import resume from "../../assets/resume.pdf";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Education", to: "education" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
  { name: "Footer", to: "footer" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <h1 className="cursor-pointer text-2xl font-bold text-cyan-400">
          Shafa<span className="text-white">.</span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-cyan-400"
                className="cursor-pointer text-slate-300 transition hover:text-cyan-400"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <a
          href={resume}
          download="Shafa_Islam_Resume.pdf"
          className="hidden rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400 lg:block"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-slate-900 lg:hidden">
          <ul className="flex flex-col gap-6 px-6 py-6">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-cyan-400"
                onClick={() => setOpen(false)}
                className="cursor-pointer text-lg text-slate-300 transition hover:text-cyan-400"
              >
                {item.name}
              </ScrollLink>
            ))}

            <a
              href={resume}
              download="Shafa_Islam_Resume.pdf"
              onClick={() => setOpen(false)}
              className="inline-block rounded-lg bg-cyan-500 px-5 py-2 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Download Resume
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;