import { motion } from "framer-motion";
import {
  FaBug,
  FaLightbulb
} from "react-icons/fa";

const Challenges = ({ project }) => {
  return (
    <section className="mt-28">

      <h2 className="text-4xl font-bold text-cyan-400 mb-12">
        Challenges & Solutions
      </h2>

      <div className="grid lg:grid-cols-2 gap-10">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="
          rounded-3xl
          border
          border-slate-700
          bg-slate-900/70
          p-10
          "
        >

          <FaBug className="text-4xl text-red-400" />

          <h3 className="mt-6 text-2xl font-bold">
            Challenges
          </h3>

          <ul className="mt-8 space-y-4 list-disc ml-6 text-slate-300">

            {project.challenges.map((item) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="
          rounded-3xl
          border
          border-slate-700
          bg-slate-900/70
          p-10
          "
        >

          <FaLightbulb className="text-4xl text-yellow-400" />

          <h3 className="mt-6 text-2xl font-bold">
            Solutions
          </h3>

          <ul className="mt-8 space-y-4 list-disc ml-6 text-slate-300">

            {project.solutions.map((item) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>

        </motion.div>

      </div>

    </section>
  );
};

export default Challenges;