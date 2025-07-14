import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Home2 from '../pages/Home2'
import Home3 from '../pages/Home3'

const HeroSection = () => {
  return (
    <>
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[size:40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-900/20 to-transparent blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-900/20 to-transparent blur-[80px] animate-float-medium" />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-900/15 to-transparent blur-[60px] animate-float-fast" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
              Everything You Need
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              To Go Viral
            </span>
          </h1>
          
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="h-1 mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto"
          />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="mt-8 text-lg md:text-xl max-w-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Generate SEO content, ad copy, blog posts, reels, email campaigns
          </span>{" "}
          and more — all in seconds, all powered by next-gen AI.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex gap-6 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] group overflow-hidden">
            <span className="relative z-10">Try It Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="px-8 py-4 border border-gray-700 hover:border-gray-500 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
            <Link to="/features" className="flex items-center gap-2">
              Explore Features
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </button>
        </motion.div>

        {/* Tech Indicators */}
        <motion.div
          className="mt-16 flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {["AI-Powered", "Real-Time Analytics", "SEO Optimized", "Multi-Platform"].map((text, i) => (
            <div key={i} className="px-4 py-2 bg-gray-900/50 backdrop-blur-md rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-blue-400 transition-colors" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                  {text}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    <Home2 />
    <Home3/>
    </>
  );
};

export default HeroSection;