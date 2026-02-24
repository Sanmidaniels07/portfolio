import { motion } from "framer-motion";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Firebase from "../assets/firebase.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Typescript from "../assets/typescriptLogo.png";
import Nextjs from "../assets/nextjs.png";

const frontendSkills = [
  { name: "HTML5", icon: HTML, level: 95 },
  { name: "CSS3", icon: CSS, level: 90 },
  { name: "JavaScript", icon: Javascript, level: 92 },
  { name: "TypeScript", icon: Typescript, level: 78 },
  { name: "React", icon: ReactImg, level: 90 },
  { name: "Next.js", icon: Nextjs, level: 80 },
  { name: "Tailwind", icon: Tailwind, level: 88 },
];

const backendSkills = [
  { name: "Node.js", icon: Node, level: 72 },
  { name: "MongoDB", icon: Mongo, level: 68 },
  { name: "Firebase", icon: Firebase, level: 70 },
];

const SkillCard = ({ name, icon, level, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.06 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-pink-500/50 hover:bg-white/8 transition-all duration-300 cursor-default"
  >
    <img src={icon} alt={name} className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300" />
    <p className="text-zinc-300 text-sm font-semibold tracking-wide">{name}</p>
    {/* Proficiency bar */}
    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 + index * 0.06, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-pink-600 to-rose-400 rounded-full"
      />
    </div>
    <span className="absolute top-3 right-3 text-xs text-zinc-600 font-mono group-hover:text-pink-400 transition-colors">{level}%</span>
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
          <span className="text-pink-500 text-sm font-mono tracking-widest uppercase">03.</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Stack</span>
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-zinc-700 to-transparent" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 text-sm mb-14 ml-12"
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 max-w-sm">
          {backendSkills.map((s, i) => (
            <SkillCard key={s.name} {...s} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;