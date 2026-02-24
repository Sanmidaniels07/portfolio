import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profilePix from "../assets/profilepix.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const roles = [
  "Frontend Engineer",
  "UI/UX Craftsman",
  "Fullstack Knowledge",
  "React Specialist",
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = roles[roleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          70
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          40
        );
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <div name="home" className="w-full min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 w-full pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="flex-1 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-pink-500 text-sm uppercase tracking-[0.3em] mb-4 font-medium"
            >
              Available for work ·
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl sm:text-7xl font-black text-white leading-none tracking-tight mb-3"
            >
              DANIEL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600">
                OMOWOLE
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-zinc-300 mb-6 h-10"
            >
              <span>{displayed}</span>
              <span className="w-[2px] h-8 bg-pink-500 animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-zinc-400 text-base sm:text-lg max-w-[520px] leading-relaxed mb-10"
            >
              I build pixel-perfect, performant interfaces that users love — from
              sleek frontends to robust full-stack architectures. Passionate about
              crafting experiences that are both beautiful and blazing fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="work" smooth duration={500}>
                <button className="group flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-pink-600 to-rose-500 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105">
                  View My Work
                  <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link to="contact" smooth duration={500}>
                <button className="flex items-center gap-3 px-7 py-3.5 border border-zinc-600 text-zinc-300 font-semibold text-sm uppercase tracking-wider rounded-full hover:border-pink-500 hover:text-pink-400 transition-all duration-300">
                  Let's Talk
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex-shrink-0"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-pink-500/40 animate-spin-slow" style={{ animationDuration: "12s" }} />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-pink-600/20 to-cyan-500/20 blur-xl" />
              <motion.img
                src={profilePix}
                alt="Daniel Omowole"
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-pink-500/60 shadow-2xl shadow-pink-500/20"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-4 top-8 bg-[#1a1a1a] border border-white/10 rounded-xl px-3 py-2 text-center shadow-xl backdrop-blur"
              >
                <p className="text-pink-400 font-black text-lg leading-none">5+</p>
                <p className="text-zinc-400 text-xs mt-0.5">Years Exp.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -left-4 bottom-8 bg-[#1a1a1a] border border-white/10 rounded-xl px-3 py-2 text-center shadow-xl backdrop-blur"
              >
                <p className="text-cyan-400 font-black text-lg leading-none">15+</p>
                <p className="text-zinc-400 text-xs mt-0.5">Projects</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 mt-16"
        >
          <span className="text-zinc-500 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </div>

      <style>{`
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>
    </div>
  );
};

export default Home;