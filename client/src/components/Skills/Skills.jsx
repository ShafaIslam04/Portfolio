import SkillCategory from "./SkillCategory";

// Frontend
import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";
import javascript from "../../assets/skills/javascript.svg";
import typescript from "../../assets/skills/typescript.svg";
import react from "../../assets/skills/react.svg";
import tailwind from "../../assets/skills/tailwind.svg";

// Backend
import node from "../../assets/skills/nodejs.svg";
import laravel from "../../assets/skills/laravel.svg";

// Database
import postgres from "../../assets/skills/postgresql.svg";
import prisma from "../../assets/skills/prisma.svg";

// Tools
import git from "../../assets/skills/git.svg";
import postman from "../../assets/skills/postman.svg";
import figma from "../../assets/skills/figma.svg";

// Icons
import { FaGithub } from "react-icons/fa";
import {
  SiExpress,
  SiNuxt,
} from "react-icons/si";

const frontend = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: react },
  { name: "Tailwind CSS", icon: tailwind },
  {
    name: "Nuxt",
    icon: <SiNuxt size={60} color="#00DC82" />,
  },
];

const backend = [
  { name: "Node.js", icon: node },
  {
    name: "Express.js",
    icon: <SiExpress size={60} color="white" />,
  },
  { name: "Laravel", icon: laravel },
];

const database = [
  { name: "PostgreSQL", icon: postgres },
  { name: "Prisma ORM", icon: prisma },
];

const tools = [
  { name: "Git", icon: git },
  {
    name: "GitHub",
    icon: <FaGithub size={60} color="white" />,
  },
  { name: "Postman", icon: postman },
  { name: "Figma", icon: figma },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white">
            Technical Skills
          </h2>

          <div className="w-24 h-1 bg-cyan-500 rounded-full mx-auto mt-4"></div>

          <p className="text-slate-400 mt-6">
            Technologies and tools I use.
          </p>
        </div>

        <SkillCategory title="Frontend" skills={frontend} />
        <SkillCategory title="Backend" skills={backend} />
        <SkillCategory title="Database" skills={database} />
        <SkillCategory title="Tools" skills={tools} />

      </div>
    </section>
  );
};

export default Skills;