import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaServer } from "react-icons/fa";
import { data } from "../data/data.js";

// A project's links - only the ones it actually has. Shown on the card
// (always visible, so they work on phones where there's no hover) and on
// the image overlay for desktop.
const linksOf = (item) =>
  [
    item.github && { href: item.github, label: "Code", icon: FaGithub },
    item.api && { href: item.api, label: "API", icon: FaServer },
    item.live && { href: item.live, label: "Live", icon: FaExternalLinkAlt, primary: true },
  ].filter(Boolean);

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
          className="text-zinc-500 text-sm mb-14 sm:ml-12"
        >
          A selection of projects I'm proud of
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {projects.map((item, index) => {
            const links = linksOf(item);
            return (
              <motion.div
                key={item.id ?? index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-pink-500/40 transition-all duration-400"
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} screenshot`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-400" />
                  {item.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-pink-600/90 px-3 py-1 text-[11px] font-semibold text-white shadow-lg backdrop-blur">
                      {item.badge}
                    </span>
                  )}
                  {/* Desktop: quick links on hover */}
                  <div className="absolute inset-0 hidden items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100 md:flex">
                    {links.map(({ href, label, icon: Icon, primary }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2.5 backdrop-blur-md border text-white rounded-full text-sm font-medium transition-colors ${
                          primary
                            ? "bg-pink-600/80 border-pink-500/30 hover:bg-pink-600"
                            : "bg-white/15 border-white/20 hover:bg-white/25"
                        }`}
                      >
                        <Icon size={13} /> {label}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Project info */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-white font-bold text-base mb-1 group-hover:text-pink-400 transition-colors">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  {item.stack && (
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                      {item.stack.map((tech, i) => (
                        <span key={i} className="text-xs text-pink-400/80 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* Always visible - works on touch screens */}
                  {links.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      {links.map(({ href, label, icon: Icon, primary }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${item.name} - ${label}`}
                          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                            primary
                              ? "bg-pink-600/90 text-white hover:bg-pink-600"
                              : "border border-white/15 text-zinc-300 hover:border-pink-500/50 hover:text-white"
                          }`}
                        >
                          <Icon size={12} /> {label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
