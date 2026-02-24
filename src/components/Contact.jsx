import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [focused, setFocused] = useState(null);
  const [sent, ] = useState(false);

  const inputClass = (name) =>
    `w-full bg-white/5 border ${
      focused === name ? "border-pink-500/80" : "border-white/10"
    } rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 text-sm outline-none transition-all duration-300 focus:bg-white/8`;

  return (
    <div name="contact" className="w-full py-24 relative overflow-hidden">
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-pink-500 text-sm font-mono tracking-widest uppercase">05.</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Touch</span>
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-zinc-700 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-14">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's build something great together.</h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Whether you have a project in mind, want to collaborate, or just want
              to say hi — my inbox is always open. I'll do my best to get back to
              you promptly.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:sanmidaniels07@gmail.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-pink-400 transition-colors text-sm group"
              >
                <HiOutlineMail className="text-pink-500 group-hover:scale-110 transition-transform" size={20} />
                sanmidaniels07@gmail.com
              </a>
            </div>

            <div className="flex gap-4 mt-10">
              {[
                { href: "https://github.com/Sanmidaniels07", icon: <FaGithub size={20} /> },
                { href: "https://www.linkedin.com/in/daniel-omowole-95a978186", icon: <FaLinkedin size={20} /> },
                { href: "https://twitter.com/O_sanmidaniels", icon: <FaTwitter size={20} /> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:border-pink-500/50 hover:text-pink-400 transition-all duration-300 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-600 to-rose-500 flex items-center justify-center text-white text-2xl">
                  ✓
                </div>
                <h4 className="text-white font-bold text-xl">Message Sent!</h4>
                <p className="text-zinc-400 text-sm">Thanks for reaching out. I'll be in touch soon.</p>
              </motion.div>
            ) : (
              <form
                method="POST"
                action="https://getform.io/f/a38f3bf9-eab5-4183-b813-42bf5eed23ef"
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={inputClass("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={inputClass("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows="7"
                    placeholder="Your Message"
                    className={`${inputClass("message")} resize-none`}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-pink-600 to-rose-500 text-white font-semibold text-sm uppercase tracking-wider rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                >
                  Send Message →
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-24 pt-8 border-t border-white/5"
        >
          <p className="text-zinc-600 text-xs">
            <span className="text-pink-500 font-medium">Daniel Sanmi Omowole</span> · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;