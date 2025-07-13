import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { motion } from "framer-motion";
import CurvedLoop from "../../utils/CurvedLoop";
import Home2 from "../pages/Home2";

const HeroSection = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff5e00,
          backgroundColor: 0x1a0f00,
          points: 15.0,
          maxDistance: 20.0,
          spacing: 15.0
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div
        ref={vantaRef}
        className="w-full h-screen text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(236,72,153,0.7)] animate-pulse"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Everything You Need to Go Viral. Built with AI.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl max-w-2xl text-gray-100 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold drop-shadow-[0_0_15px_rgba(236,72,153,0.7)]">
              Generate SEO content, ad copy, blog posts, reels, email campaigns
            </span>{" "}
            and more — all in seconds, all powered by next-gen AI.
          </motion.p>

          <motion.div
            className="mt-10 flex gap-6 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg transition-all">
              Try It Now
            </button>
            <button className="px-8 py-3 border border-white/30 hover:border-white/60 text-white font-medium rounded-full transition-all">
              Explore Features
            </button>
          </motion.div>

          <div className="absolute bottom-0 left-0 w-full">
            <CurvedLoop 
              marqueeText="Supercharged by AI • Viral Reach • Smart Content • "
              direction="left"
              speed={1.5}
              curveAmount={550}
              className="text-[1.5rem] md:text-[3rem] text-white"
            />
          </div>
        </div>
      </div>

<Home2 />


    </>
  );
};

export default HeroSection;