import { motion } from "framer-motion";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import Typescript from "../assets/typescriptLogo.png";
import Nextjs from "../assets/nextjs.png";
import Express from "../assets/express-js.png";
import PostgreSQL from "../assets/postgresql.png";
import Prisma from "../assets/prisma-orm.png";
import Supabase from "../assets/supabase.png";
import Git from "../assets/git.png";
import Api from "../assets/rest-api.png";

const frontendSkills = [
  { name: "HTML5", icon: HTML },
  { name: "CSS3", icon: CSS },
  { name: "JavaScript", icon: Javascript },
  { name: "TypeScript", icon: Typescript },
  { name: "React", icon: ReactImg },
  { name: "Next.js", icon: Nextjs },
  { name: "Tailwind", icon: Tailwind },
];

const backendSkills = [
  { name: "Node.js", icon: Node },
  { name: "Express.js", icon: Express },
  { name: "PostgreSQL", icon: PostgreSQL },
  { name: "Prisma ORM", icon: Prisma },
  { name: "Supabase", icon: Supabase },
  { name: "REST APIs", icon: Api },
  { name: "Git", icon: Git },
];

// Everything else from the CV, as tags.
const otherTools = [
  "Redux", "Zustand", "Hookstate", "React Query (TanStack)", "React Native", "Vite", "Framer Motion",
  "Mantine UI", "Material UI", "Firebase", "JWT Auth", "Role-Based Access Control", "Zod", "Swagger / OpenAPI",
  "Paystack", "Cloudinary", "Unit & E2E Testing", "CI/CD", "SEO",
];

const SkillCard = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.06 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-pink-500/50 hover:bg-white/8 transition-all duration-300 cursor-default"
  >
    <img
      src={icon}
      alt={name}
      className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
    />
    <p className="text-zinc-300 text-sm font-semibold tracking-wide text-center">{name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <div name="skills" className="w-full py-24 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-pink-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-pink-500 text-sm font-mono tracking-widest uppercase">
            03.
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
              Stack
            </span>
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-zinc-700 to-transparent" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 text-sm mb-14 sm:ml-12"
        >
          Technologies I work with professionally
        </motion.p>

        {/* Frontend */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-pink-500 font-medium mb-5"
        >
          Frontend
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {frontendSkills.map((s, i) => (
            <SkillCard key={s.name} {...s} index={i} />
          ))}
        </div>

        {/* Backend */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-cyan-500 font-medium mb-5"
        >
          Backend & Tools
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {backendSkills.map((s, i) => (
            <SkillCard key={s.name} {...s} index={i} />
          ))}
        </div>

        {/* Also */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-medium mb-5 mt-12"
        >
          Also work with
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2.5"
        >
          {otherTools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-300 hover:border-pink-500/50 hover:text-white transition-colors"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
