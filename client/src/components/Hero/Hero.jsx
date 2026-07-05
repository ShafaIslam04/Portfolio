import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";


import profile from "../../assets/Projects/images.jfif";
import resume from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}

        <div>

          <p className="text-cyan-400 text-xl mb-2">
            Assalamualaikum, I'm
          </p>

          <h1 className="text-6xl font-extrabold mb-4">
            Shafa Islam
          </h1>

          <h2 className="text-3xl text-slate-300 mb-6">

            <Typewriter
              words={[
                "Software Engineer",
                "Full Stack Developer",
                "React Developer",
                "Node.js Developer"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
            />

          </h2>

          <p className="text-slate-400 leading-8 mb-8">

            Passionate Full Stack Developer who enjoys building scalable,
            modern and responsive web applications using React, Node.js,
            Express and PostgreSQL.

          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href={resume}
              download
              className="bg-cyan-500 hover:bg-cyan-400 px-7 py-3 rounded-lg font-semibold text-slate-950 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 px-7 py-3 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition"
            >
              Contact Me
            </a>

          </div>

          <div className="flex gap-5 mt-10 text-3xl">

            <a
              href="https://github.com/ShafaIslam04"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/shafa-islam"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

           

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src={profile}
            alt="Shafa Islam"
            className="w-80 h-80 object-cover rounded-full border-8 border-cyan-500 shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;