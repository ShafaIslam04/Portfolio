import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="
          fixed
          inset-0
          z-[999]
          flex
          items-center
          justify-center
          bg-black/70
          backdrop-blur-md
          p-4
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          transition={{
            duration: 0.35,
          }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            w-full
            max-w-5xl
            max-h-[90vh]
            overflow-y-auto
            rounded-3xl
            border
            border-slate-700
            bg-slate-900
            shadow-2xl
          "
        >
          {/* Close Button */}

          <button
            onClick={onClose}
            className="
              absolute
              top-5
              right-5
              z-20
              h-11
              w-11
              rounded-full
              bg-slate-800
              flex
              items-center
              justify-center
              hover:bg-red-500
              duration-300
            "
          >
            <FaTimes />
          </button>

          {/* Image */}

          <div className="h-80 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}

          <div className="p-10">

            <h2 className="text-4xl font-black text-white">
              {project.title}
            </h2>

            <p className="mt-3 text-cyan-400">
              {project.year}
            </p>

            {/* Tags */}

            <div className="mt-8 flex flex-wrap gap-3">

              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-cyan-500
                    bg-cyan-500/10
                    px-4
                    py-2
                    text-sm
                    text-cyan-300
                  "
                >
                  {tag}
                </span>
              ))}

            </div>

            {/* Overview */}

            <div className="mt-12">

              <h3 className="text-2xl font-bold text-white">
                Project Overview
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                {project.description}
              </p>

            </div>

            {/* Features */}

            <div className="mt-12">

              <h3 className="text-2xl font-bold text-white mb-6">
                Key Features
              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      bg-slate-800
                      p-4
                    "
                  >
                    <FaCheckCircle className="text-cyan-400" />

                    <span>{feature}</span>

                  </div>
                ))}
              </div>

            </div>
                        {/* Buttons */}

            <div className="mt-14 flex flex-wrap gap-5">

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-cyan-500
                  px-7
                  py-4
                  font-semibold
                  text-slate-950
                  transition
                  duration-300
                  hover:bg-cyan-400
                  hover:scale-105
                "
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-slate-600
                  px-7
                  py-4
                  font-semibold
                  transition
                  duration-300
                  hover:border-cyan-400
                  hover:bg-slate-800
                "
              >
                <FaGithub />
                Source Code
              </a>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
};

export default ProjectModal;