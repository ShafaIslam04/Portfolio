import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.div
      layout
      whileHover={{
        y: -10,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      onClick={() => onOpen(project)}
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-3xl
        border
        border-slate-700
        bg-slate-900/80
        backdrop-blur-xl
        hover:border-cyan-400
        hover:shadow-[0_20px_50px_rgba(34,211,238,.18)]
        transition-all
        duration-300
      "
    >
      {/* Image */}

      <div className="relative h-56 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            duration-500
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-transparent
            to-transparent
          "
        />

        {/* Year */}

        <div
          className="
            absolute
            top-4
            right-4
            rounded-full
            bg-cyan-500
            px-3
            py-1
            text-xs
            font-bold
            text-slate-950
          "
        >
          {project.year}
        </div>
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-400 leading-7">
          {project.shortDescription}
        </p>

        {/* Tags */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-cyan-500/30
                bg-cyan-500/10
                px-3
                py-1
                text-xs
                text-cyan-300
              "
            >
              {tag}
            </span>
          ))}

        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between">

          <div
            className="
              flex
              items-center
              gap-2
              text-cyan-400
              font-semibold
            "
          >
            View Details

            <FaArrowRight
              className="
                duration-300
                group-hover:translate-x-2
              "
            />
          </div>

          <FaGithub
            className="
              text-2xl
              text-slate-400
              duration-300
              group-hover:text-white
            "
          />

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;