import { motion } from "framer-motion";

const SkillCard = ({ name, icon }) => {
  const isImage = typeof icon === "string";

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        bg-slate-900/70
        backdrop-blur-xl
        border
        border-slate-700
        rounded-3xl
        p-8
        flex
        flex-col
        items-center
        justify-center
        hover:border-cyan-400
        hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
        transition-all
      "
    >
      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.15,
        }}
        transition={{
          duration: 0.3,
        }}
        className="flex items-center justify-center h-16 w-16"
      >
        {isImage ? (
          <img
            src={icon}
            alt={name}
            className="w-16 h-16 object-contain"
          />
        ) : (
          icon
        )}
      </motion.div>

      <h3 className="mt-6 text-lg font-semibold text-white">
        {name}
      </h3>
    </motion.div>
  );
};

export default SkillCard;