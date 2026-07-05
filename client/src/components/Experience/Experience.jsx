import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaFigma,
  FaGithub,
  FaServer,
} from "react-icons/fa";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Nuxt.js",
  "Laravel",
  "MVC",
  "REST API",
  "OOP",
  "GitHub",
  "Figma",
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[160px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-24"
        >
          <span className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Experience
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Professional Experience
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 leading-8">
            My first professional software engineering experience where I
            collaborated with a development team and contributed to
            production-ready web applications.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400"></div>

          {/* Timeline Dot */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="hidden lg:flex absolute left-4 top-10 w-9 h-9 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-[0_0_25px_#22d3ee]"
          />

          {/* Experience Card */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="lg:ml-24 rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl overflow-hidden hover:border-cyan-400 duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,.25)]"
          >

            {/* Top */}

            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                <div>

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl">
                      <FaBriefcase />
                    </div>

                    <div>

                      <h3 className="text-3xl font-bold">
                        Software Engineer Intern
                      </h3>

                      <p className="text-cyan-400 text-lg mt-1">
                        BD Funnel Builder
                      </p>

                    </div>

                  </div>

                </div>

                <div className="text-left lg:text-right">

                  <span className="inline-block bg-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full">
                    Jan 2025 – Mar 2025
                  </span>

                  <p className="mt-3 text-slate-400">
                    📍 Onsite
                  </p>

                </div>

              </div>

            </div>

            {/* Body */}

            <div className="p-8">

              <h4 className="text-xl font-semibold mb-5">
                Responsibilities
              </h4>

              <ul className="space-y-4 text-slate-300">

                <li className="flex gap-3">
                  <FaCode className="text-cyan-400 mt-1" />
                  Developed responsive and interactive web applications
                  using HTML, CSS, JavaScript and Nuxt.js.
                </li>

                <li className="flex gap-3">
                  <FaFigma className="text-cyan-400 mt-1" />
                  Converted Figma UI designs into pixel-perfect,
                  production-ready interfaces.
                </li>

                <li className="flex gap-3">
                  <FaServer className="text-cyan-400 mt-1" />
                  Worked with MVC architecture, Object-Oriented Programming
                  principles and REST APIs.
                </li>

                <li className="flex gap-3">
                  <FaGithub className="text-cyan-400 mt-1" />
                  Collaborated with team members using Git and GitHub,
                  participating in version control and code reviews.
                </li>

              </ul>

              {/* Tech Stack */}

              <h4 className="text-xl font-semibold mt-10 mb-5">
                Technologies Used
              </h4>

              <div className="flex flex-wrap gap-3">

                {skills.map((skill) => (

                  <motion.span
                    whileHover={{
                      scale: 1.08,
                    }}
                    key={skill}
                    className="px-5 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 duration-300"
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Experience;