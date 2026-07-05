import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            About Me
          </h2>

          <div className="w-28 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Who am I?
            </h3>

            <p className="text-slate-300 leading-8 mb-6">
              I am <span className="text-cyan-400 font-semibold">Shafa Islam</span>,
              a passionate Full Stack Developer and Computer Science graduate.
              I enjoy solving real-world problems by developing scalable,
              responsive and user-friendly web applications.
            </p>

            <p className="text-slate-300 leading-8 mb-6">
              My programming journey started with HTML, CSS and JavaScript.
              As my interest grew, I learned React, Node.js, Express,
              PostgreSQL and Prisma. I enjoy learning new technologies
              and continuously improving my problem-solving skills.
            </p>

            <p className="text-slate-300 leading-8">
              Besides programming, I enjoy exploring new technologies,
              watching tech videos, reading documentation,
              and continuously challenging myself with new projects.
            </p>

          </div>

          {/* Right */}

          <div className="grid gap-6">

            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">

              <FaCode className="text-5xl text-cyan-400 mb-4"/>

              <h3 className="text-2xl font-bold mb-3">
                Programming Journey
              </h3>

              <p className="text-slate-300">
                Started with basic web development and gradually moved
                into full-stack development using modern technologies.
              </p>

            </div>

            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">

              <FaLaptopCode className="text-5xl text-cyan-400 mb-4"/>

              <h3 className="text-2xl font-bold mb-3">
                What I Enjoy
              </h3>

              <p className="text-slate-300">
                Building responsive web applications,
                designing clean UI,
                developing REST APIs,
                and solving problems.
              </p>

            </div>

            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">

              <FaLightbulb className="text-5xl text-cyan-400 mb-4"/>

              <h3 className="text-2xl font-bold mb-3">
                My Goal
              </h3>

              <p className="text-slate-300">
                To become an excellent Software Engineer who builds
                impactful products while continuously learning and
                helping others.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;