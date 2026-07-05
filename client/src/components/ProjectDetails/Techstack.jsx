import { motion } from "framer-motion";

const TechStack = ({ project }) => {
  return (
    <section className="mt-28">

      <h2 className="text-4xl font-bold text-cyan-400 mb-12">
        Technology Stack
      </h2>

      <div className="flex flex-wrap gap-5">

        {project.technologies.map((tech, index) => (

          <motion.div
            key={tech}
            initial={{
              opacity: 0,
              scale: .8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * .05,
            }}
            whileHover={{
              scale: 1.08,
            }}
            className="
            rounded-full
            border
            border-cyan-500
            bg-cyan-500/10
            px-7
            py-3
            font-medium
            text-cyan-300
            "
          >
            {tech}
          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default TechStack;