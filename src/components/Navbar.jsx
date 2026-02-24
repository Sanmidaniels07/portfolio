import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["home", "about", "skills", "work", "contact"];

const socials = [
  {
    label: "LinkedIn",
    icon: <FaLinkedin size={22} />,
    href: "https://www.linkedin.com/in/daniel-omowole-95a978186",
    color: "from-blue-600 to-blue-500",
  },
  {
    label: "GitHub",
    icon: <FaGithub size={22} />,
    href: "https://github.com/Sanmidaniels07",
    color: "from-zinc-700 to-zinc-600",
  },
  {
    label: "Twitter",
    icon: <FaTwitter size={22} />,
    href: "https://twitter.com/O_sanmidaniels?t=g38gFFo0Z3sxve10cJ7OYA&s=08",
    color: "from-sky-500 to-sky-400",
  },
  {
    label: "Email",
    icon: <HiOutlineMail size={22} />,
    href: "mailto:sanmidaniels07@gmail.com",
    color: "from-pink-600 to-rose-500",
  },
  {
    label: "Resume",
    icon: <BsFillPersonLinesFill size={22} />,
    href: "https://drive.google.com/file/d/1nnw88a8hMfpdqePSW5Y1GvZYLBxfuQAr/view?usp=drive_link",
    color: "from-teal-600 to-cyan-500",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0d0d]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="text-white font-bold text-lg tracking-widest uppercase"
          >
            <span className="text-pink-500">&lt;</span>
            Daniel
            <span className="text-pink-500">/&gt;</span>
          </motion.div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth
                  duration={500}
                  spy
                  onSetActive={() => setActiveSection(item)}
                  className="relative text-sm uppercase tracking-widest text-zinc-400 hover:text-white cursor-pointer transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setToggle(!toggle)}
            className="md:hidden text-white z-50 p-2"
          >
            <AnimatePresence mode="wait">
              {toggle ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={item}
                    smooth
                    duration={500}
                    onClick={() => setToggle(false)}
                    className="text-4xl font-bold uppercase tracking-widest text-zinc-300 hover:text-pink-400 transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-50">
        <ul className="flex flex-col gap-1">
          {socials.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: -90, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              whileHover={{ x: -4 }}
              className="group"
            >
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-between w-[150px] h-[52px] px-4 bg-gradient-to-r ${s.color} text-white text-sm font-medium transition-all duration-300 shadow-lg`}
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  {s.label}
                </span>
                <span className="group-hover:scale-110 transition-transform duration-200">
                  {s.icon}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;