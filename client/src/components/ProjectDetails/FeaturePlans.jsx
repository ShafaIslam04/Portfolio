import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

const FuturePlans = ({ project }) => {
  return (
    <section className="mt-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-cyan-500 bg-cyan-500/10 p-10"
      >
        <div className="flex items-center gap-4">
          <FaRocket className="text-4xl text-cyan-400" />

          <h2 className="text-4xl font-bold">
            Future Improvements
          </h2>
        </div>

        <ul className="mt-8 space-y-4 text-slate-300">
          {project.future.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default FuturePlans;