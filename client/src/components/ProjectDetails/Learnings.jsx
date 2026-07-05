import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Learnings = ({ project }) => {
  return (
    <section className="mt-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-slate-700 bg-slate-900/60 p-10"
      >
        <div className="flex items-center gap-4">
          <FaGraduationCap className="text-4xl text-cyan-400" />
          <h2 className="text-4xl font-bold text-cyan-400">
            What I Learned
          </h2>
        </div>

        <ul className="mt-8 space-y-4 text-slate-300">
          {project.learnings.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Learnings;