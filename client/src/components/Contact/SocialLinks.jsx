import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  
} from "react-icons/fa";

const socials = [
  {
    id: 1,
    icon: FaGithub,
    name: "GitHub",
    url: "https://github.com/ShafaIslam04",
  },
  {
    id: 2,
    icon: FaLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shafa-islam/",
  },
  
];

const SocialLinks = () => {
  return (
    <div className="mt-10">

      <h3 className="text-xl font-bold text-white mb-5">
        Connect With Me
      </h3>

      <div className="flex gap-5">

        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -8,
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="
                group
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-700
                bg-slate-900/70
                backdrop-blur-xl
                text-2xl
                text-slate-300
                transition-all
                duration-300
                hover:border-cyan-400
                hover:text-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
              "
            >
              <Icon />
            </motion.a>
          );
        })}

      </div>

    </div>
  );
};

export default SocialLinks;