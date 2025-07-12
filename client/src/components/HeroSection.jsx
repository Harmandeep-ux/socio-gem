import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useState, useEffect } from "react";
import { FiArrowRight, FiPlay, FiZap } from "react-icons/fi";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // **Particle Config (Next-Level Cosmic Energy)**
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: false,
    background: { color: "#000000" },
    particles: {
      number: { 
        value: 120,
        density: { enable: true, value_area: 1000 }
      },
      color: { 
        value: ["#00f0ff", "#00ff88", "#0088ff", "#ff00f0", "#ffcc00"] 
      },
      shape: { 
        type: ["circle", "triangle", "star"],
        stroke: { width: 0, color: "#000000" },
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 4,
        random: true,
        anim: { enable: true, speed: 3, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 180,
        color: "#00f0ff",
        opacity: 0.5,
        width: 1.5
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: true, rotateX: 1000, rotateY: 1000 }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 6 }
      }
    },
    retina_detect: true
  };

  // **Cursor Tracker (For Ultra-Responsive UI)**
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* === **Cosmic Particle Storm** === */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* === **Neon Glow Orbs (Floating in 3D Space)** === */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-cyan-500 opacity-15 blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [-50, 50, -50],
          y: [0, 60, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500 opacity-15 blur-[100px]"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -80, 0],
          y: [0, 70, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* === **Main Content (Animated with God-Level Precision)** === */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center">
        {/* **Title (Magnetic & Hypnotic)** */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500 animate-pulse" />
          <motion.h1 
            className="relative text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", damping: 10 }}
          >
            <motion.span 
              className="inline-block"
              whileHover={{ y: -5 }}
            >
              Supercharge
            </motion.span>{" "}
            <motion.span 
              className="inline-block"
              whileHover={{ y: -5 }}
            >
              Your Content
            </motion.span>{" "}
            <motion.span 
              className="inline-block"
              whileHover={{ rotate: 10 }}
            >
              with AI
            </motion.span>{" "}
            <motion.span 
              className="inline-block"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* **Subtitle (Smooth & Persuasive)** */}
        <motion.p
          className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Revolutionize your workflow with AI that writes, edits, and optimizes content—faster than humanly possible.
        </motion.p>

        {/* **CTA Buttons (Irresistible & Interactive)** */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, staggerChildren: 0.2 }}
        >
          <motion.button
            className="relative px-10 py-5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full text-white font-bold shadow-2xl group overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <span className="relative z-10 flex items-center gap-2">
              <FiZap className="text-xl" /> Get Started Free
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
            />
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
              style={{
                x: cursorPos.x - 100,
                y: cursorPos.y - 100,
                background: `radial-gradient(100px at ${cursorPos.x}px ${cursorPos.y}px, rgba(255,255,255,0.3), transparent)`,
              }}
            />
          </motion.button>

          <motion.button
            className="relative px-10 py-5 bg-transparent border-2 border-cyan-400/50 hover:border-cyan-300 rounded-full text-cyan-300 hover:text-white font-bold group"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 300 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <FiPlay className="text-xl" /> Watch Demo
            </span>
            <span className="absolute inset-0 bg-cyan-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-10 -z-1" />
          </motion.button>
        </motion.div>

        {/* **Floating AI Terminal (Next-Level Futuristic UI)** */}
        <motion.div 
          className="mt-24 w-72 md:w-96 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          whileHover={{ y: -10 }}
        >
          <div className="absolute -inset-4 bg-cyan-500/20 rounded-3xl blur-xl" />
          <div className="relative bg-gray-900/50 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 shadow-2xl overflow-hidden">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="bg-gray-800/70 rounded-lg p-4 text-left font-mono text-sm">
              <div className="text-cyan-400 mb-2">$ AI generate blog post --topic "Future of AI"</div>
              <div className="h-3 bg-gray-700 rounded mb-2 w-3/4" />
              <div className="h-3 bg-gray-700 rounded mb-2 w-full" />
              <div className="h-3 bg-gray-700 rounded mb-2 w-5/6" />
              <div className="flex items-center gap-2 mt-3">
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                <div className="text-cyan-300 text-xs">Generating content...</div>
              </div>
            </div>
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </motion.div>
      </div>

      {/* **Scroll Indicator (Subtle & Elegant)** */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        style={{ y: yPos }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400 rounded-full"
          >
            <motion.div
              animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-400 mx-auto mt-2 rounded-full"
            />
          </motion.div>
          <motion.p 
            className="mt-2 text-cyan-300 text-sm"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;