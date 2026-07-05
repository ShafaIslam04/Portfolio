import { motion } from "framer-motion";

const EducationCard = ({
  icon,
  degree,
  institute,
  duration,
  result,
  description,
  side,
}) => {
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative flex mb-20 ${
        isLeft ? "lg:justify-start" : "lg:justify-end"
      } justify-start`}
    >
      {/* Timeline Dot */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-20 z-20">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="w-6 h-6 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-[0_0_20px_#22d3ee]"
        />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="group relative w-full lg:w-[44%] rounded-3xl overflow-hidden border border-slate-700 bg-slate-900/70 backdrop-blur-xl p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.25)]"
      >
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 duration-500"></div>

        <motion.div
          whileHover={{
            rotate: 360,
            scale: 1.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="w-20 h-20 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-4xl"
        >
          {icon}
        </motion.div>

        <h2 className="mt-8 text-2xl font-bold">
          {degree}
        </h2>

        <p className="text-cyan-400 mt-2">
          {institute}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">
            📅 {duration}
          </span>

          <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm">
            ⭐ {result}
          </span>
        </div>

        <p className="mt-8 leading-8 text-slate-300">
          {description}
        </p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{
            duration: 1,
          }}
          className="h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-8"
        />
      </motion.div>
    </motion.div>
  );
};

export default EducationCard;