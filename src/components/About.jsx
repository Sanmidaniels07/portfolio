import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "10+", label: "Technologies" },
];

const highlights = [
  "Frontend-first mindset with full-stack capability",
  "React, Next.js & TypeScript specialist",
  "Node.js, MongoDB & REST API experience",
  "Performance-driven, accessibility-aware",
];

const About = () => {
  return (
    <div name="about" className="w-full py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-pink-500 text-sm font-mono tracking-widest uppercase">
            02.
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
              Me
            </span>
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-zinc-700 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-6"
            >
              I turn ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                exceptional digital experiences.
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-base leading-relaxed mb-5"
            >
              Hey, I'm Daniel — a Software Engineer who lives at the
              intersection of clean code and stunning interfaces. I'm primarily
              a frontend engineer who genuinely enjoys the craft of building
              things that look great and work even better.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-400 text-base leading-relaxed mb-8"
            >
              My backend experience means I understand how everything fits
              together — from API design to database schemas — so I can
              collaborate effectively across the stack and make smarter
              decisions at every layer. I care deeply about performance,
              accessibility, and the small details that make a product feel
              truly polished.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-3"
            >
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3 text-zinc-300 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur hover:border-pink-500/40 transition-colors duration-300"
                >
                  <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-rose-500">
                    {s.value}
                  </p>
                  <p className="text-zinc-400 text-xs mt-1 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur p-8"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600 via-rose-400 to-cyan-500" />
              <p className="text-zinc-300 text-sm font-mono text-center mb-1 text-pink-400">
                {"// philosophy"}
              </p>
              <p className="text-white text-lg font-bold text-center leading-snug">
                "Great software is never just functional — it's{" "}
                <span className="text-pink-400">delightful</span>."
              </p>
              <p className="text-zinc-500 text-sm text-center mt-3">
                I believe every interaction is an opportunity to make someone's
                day a little better.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
