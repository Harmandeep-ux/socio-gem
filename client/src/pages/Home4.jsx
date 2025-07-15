import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

const Home4 = () => {
  return (
    <footer className="relative text-white border-t border-neutral-800 overflow-hidden bg-[#050505]">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(5,5,5,0.95)_0%,_rgba(10,5,15,0.95)_50%,_rgba(5,5,5,0.95)_100%)]">
        {/* Subtle floating particles */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50"
              style={{
                width: `${Math.random() * 150 + 50}px`,
                height: `${Math.random() * 150 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                filter: 'blur(30px)'
              }}
            />
          ))}
        </div>

        {/* Central glow - more subtle */}
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-purple-900/20 rounded-full blur-[80px] -z-10 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Footer Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center relative z-10">
        {/* Accent Bar - thinner */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500/80 to-purple-600/80 rounded-full mb-8"></div>

        {/* Project Name - more elegant */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            RankLift
          </span>
        </h2>

        {/* Project Description - refined */}
        <p className="text-lg text-neutral-400/90 mb-6 max-w-lg leading-relaxed tracking-tight">
         An AI lab project by me — made to supercharge your content.
        </p>

        {/* Quote - more professional */}
        <p className="italic text-sm text-neutral-500/80 mb-10 font-light tracking-wide">
          "Empowering creators with intelligent automation"
        </p>

        {/* Social Links - refined styling */}
        <div className="flex space-x-5 mb-8">
          <a href="#" className="text-neutral-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-full hover:bg-neutral-800/50" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="text-neutral-400 hover:text-sky-400 transition-colors duration-300 p-2 rounded-full hover:bg-neutral-800/50" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-neutral-400 hover:text-blue-500 transition-colors duration-300 p-2 rounded-full hover:bg-neutral-800/50" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@sociopostgen.com" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300 p-2 rounded-full hover:bg-neutral-800/50" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        {/* Contact - more professional */}
        <p className="text-sm text-neutral-400/80 mb-6 tracking-wide">
          For inquiries: <a href="mailto:contact@sociopostgen.com" className="text-blue-400 hover:underline font-medium">contact@sahotaharman59111</a>
        </p>

        {/* Location - subtle */}
        <div className="text-xs text-neutral-500/70 mb-8 tracking-wider">
          <p className="bg-neutral-900/50 px-3 py-1.5 rounded-full inline-block border border-neutral-800/50">
            PUNJAB, INDIA • EST. 2025
          </p>
        </div>

        {/* Credits - minimal */}
        <div className="text-xs text-neutral-500/60 mb-4 tracking-wider">
          <p>© {new Date().getFullYear()} RankLift</p>
          <p className="mt-1">All rights reserved</p>
        </div>

        {/* Scroll to top - refined */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-6 p-2.5 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-full transition-all duration-300 border border-neutral-700/50 hover:border-neutral-600/50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} className="text-neutral-400" />
        </button>
      </div>

      {/* Floating animation keyframe */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); opacity: 0.1; }
          50% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(1.1); opacity: 0.3; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
        }
      `}</style>
    </footer>
  );
};

export default Home4;