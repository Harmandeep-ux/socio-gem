import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

const Home4 = () => {
  return (
    <footer className="relative text-white border-t border-neutral-800 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(10,10,10,0.9)_0%,_rgba(5,5,15,0.9)_50%,_rgba(10,10,10,0.9)_100%)]">
        {/* Floating gradient particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                style={{
                  width: `${Math.random() * 200 + 100}px`,
                  height: `${Math.random() * 200 + 100}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  filter: 'blur(40px)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-purple-500 opacity-10 rounded-full blur-3xl animate-pulse -z-10 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Footer Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center relative z-10">
        {/* Accent Bar */}
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mb-8"></div>

        {/* Project Name */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My AI Project
          </span>
        </h2>

        {/* Project Description */}
        <p className="text-lg text-neutral-400 mb-6 max-w-lg leading-relaxed">
          A personal experiment in artificial intelligence, built with curiosity and code.
        </p>

        {/* Quote */}
        <p className="italic text-base text-neutral-500 mb-10">"Creating with code, dreaming in algorithms."</p>

        {/* Social Links */}
        <div className="flex space-x-6 mb-8">
          <a href="#" className="text-neutral-400 hover:text-blue-400 transition" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="#" className="text-neutral-400 hover:text-sky-400 transition" aria-label="Twitter">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-neutral-400 hover:text-blue-500 transition" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:you@example.com" className="text-neutral-400 hover:text-emerald-400 transition" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>

        {/* Contact */}
        <p className="text-base text-neutral-400 mb-6">
          Want to collaborate? <a href="mailto:you@example.com" className="text-blue-400 hover:underline">Email me</a>
        </p>

        {/* Location */}
        <div className="text-sm text-neutral-400 mb-8">
          <p className="bg-neutral-800 px-4 py-2 rounded-full inline-block">📍 Based in Punjab, India</p>
        </div>

        {/* Credits */}
        <div className="text-sm text-neutral-500 mb-4">
          <p>© {new Date().getFullYear()} Built by <span className="text-neutral-300 font-semibold">HarmanDeep Singh</span></p>
          <p className="mt-1">Not a corporation, just a curious mind.</p>
        </div>

        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-6 p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full transition"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Floating animation keyframe */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
          50% { transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px) rotate(180deg); opacity: 0.4; }
          100% { transform: translate(0, 0) rotate(360deg); opacity: 0.2; }
        }
      `}</style>
    </footer>
  );
};

export default Home4;
