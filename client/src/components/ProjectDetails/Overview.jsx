import { motion } from "framer-motion";

const Overview = ({ project }) => {
  return (
    <section className="mt-28">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="
        rounded-3xl
        border
        border-slate-700
        bg-slate-900/70
        backdrop-blur-xl
        p-10
        "
      >
        <h2 className="text-4xl font-bold text-cyan-400">
          Project Overview
        </h2>

        <div className="mt-8 space-y-6 leading-8 text-slate-300">

          <p>{project.overview}</p>

        </div>

      </motion.div>

    </section>
  );
};

export default Overview;