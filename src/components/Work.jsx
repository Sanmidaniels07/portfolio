import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { data } from "../data/data.js";

const Work = () => {
  const projects = data;

  return (
    <div name="work" className="w-full py-24 relative overflow-hidden">
      <div className="absolute right-1/4 top-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-pink-500 text-sm font-mono tracking-widest uppercase">04.</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Work</span>
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
          A selection of projects I'm proud of
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-pink-500/40 transition-all duration-400"
            >
              {/* Project image */}
              <div
                className="relative h-48 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-400" />
                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/25 transition-colors"
                  >
                    <FaGithub size={15} /> Code
                  </motion.a>
                  <motion.a
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-pink-600/80 backdrop-blur-md border border-pink-500/30 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition-colors"
                  >
                    <FaExternalLinkAlt size={13} /> Live
                  </motion.a>
                </div>
              </div>

              {/* Project info */}
              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-1 group-hover:text-pink-400 transition-colors">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}
                {item.stack && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.stack.map((tech, i) => (
                      <span key={i} className="text-xs text-pink-400/80 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;