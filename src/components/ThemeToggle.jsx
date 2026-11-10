import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

// Light is the default. The inline script in public/index.html applies a
// saved dark choice before React loads, so the page never flashes.
const isDark = () =>
  typeof document !== "undefined" && document.documentElement.classList.contains("dark");

const applyTheme = (dark) => {
  document.documentElement.classList.toggle("dark", dark);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", dark ? "#0d0d0d" : "#f7f7fb");
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch (e) {
    // Storage blocked (private mode): the theme still applies for this visit.
  }
};

const ThemeToggle = ({ className = "" }) => {
  const [dark, setDark] = useState(isDark);

  const toggle = () => {
    const next = !dark;
    applyTheme(next);
    setDark(next);
  };

  const label = dark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-colors duration-300 hover:border-pink-500/60 hover:text-pink-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:shadow-none dark:hover:text-pink-400 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ y: 14, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
          className="flex"
        >
          {dark ? <HiOutlineMoon size={18} /> : <HiOutlineSun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
