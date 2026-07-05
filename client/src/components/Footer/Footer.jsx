import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Shafa <span className="text-cyan-400">Islam</span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Aspiring Full Stack Developer passionate about building clean,
              responsive and user-friendly web applications. Always eager to
              learn new technologies and solve real-world problems through
              software.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#home" className="transition hover:text-cyan-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-cyan-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="transition hover:text-cyan-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="transition hover:text-cyan-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-cyan-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Let's Connect
            </h4>

            <div className="space-y-3 text-slate-400">

              <p>
                📧 shafaislam050@gmail.com
              </p>

              <p>
                📱 +880 1775055737
              </p>

              <div className="flex gap-4 pt-2">

                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-slate-800 p-3 text-xl transition hover:bg-cyan-500 hover:text-slate-950"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-slate-800 p-3 text-xl transition hover:bg-cyan-500 hover:text-slate-950"
                >
                  <FaLinkedin />
                </a>

                {/* <a
                  href="https://facebook.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-slate-800 p-3 text-xl transition hover:bg-cyan-500 hover:text-slate-950"
                >
                  <FaFacebook />
                </a> */}

                <a
                  href="mailto:shafaislam050@gmail.com"
                  className="rounded-full bg-slate-800 p-3 text-xl transition hover:bg-cyan-500 hover:text-slate-950"
                >
                  <HiOutlineMail />
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row">

          <p>
            © {currentYear} Shafa Islam. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with
            <FaHeart className="text-red-500" />
            using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;