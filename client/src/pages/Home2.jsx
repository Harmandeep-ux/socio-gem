import RotatingText from '../../utils/RotatingText';
import Aurora from "../../utils/Aurora";
import { Link } from 'react-router-dom';
import HomeF from './HomeF';

const Home2 = () => {
  return (
    <>
      <div className="relative w-full min-h-screen py-24 text-white overflow-hidden bg-[#050505]">
        
        {/* 🔮 Aurora Background Layer - Darkened */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Aurora
            colorStops={["#050505", "#0a0a0a", "#080808"]}
            blend={0.05}
            amplitude={0.3}
            speed={0.3}
          />
        </div>

        {/* 🌟 Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-16 h-full">

          {/* LEFT: Heading and Subheading */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
              style={{
                textShadow: `
                  0 0 8px rgba(0, 255, 255, 0.5),
                  0 0 16px rgba(0, 255, 255, 0.3),
                  0 0 24px rgba(0, 255, 255, 0.1)
                `,
              }}
            >
              Welcome to the<br />
              <span className="text-cyan-300 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Era of AI
              </span>
            </h1>

            <p
              className="mt-6 text-xl md:text-2xl max-w-lg text-gray-300 font-medium"
              style={{
                textShadow: `
                  0 0 5px rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              Automate. Create. Dominate. Fuel your content game with intelligent AI tools.
            </p>

            <div className="mt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-lg rounded-full shadow-lg transition-all hover:shadow-cyan-500/30">
                <Link to='/layout'>Try AI Tools Now 🚀</Link>  
              </button>
            </div>

            {/* Why AI Cards - Darkened */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              {[
                { icon: "🚀", title: "Speed", desc: "Create weeks of content in minutes." },
                { icon: "🎯", title: "Precision", desc: "Optimized copy for your exact audience." },
                { icon: "💡", title: "Creativity", desc: "AI gives endless content variations." },
                { icon: "💰", title: "Saves Cost", desc: "Reduce the need for large teams." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-4 hover:border-cyan-500/30 transition-all"
                >
                  <div className="text-3xl mb-2 text-cyan-400">{item.icon}</div>
                  <div className="font-bold text-white">{item.title}</div>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Testimonial - Darkened */}
            <div className="mt-10 italic text-gray-400 text-sm max-w-md border-l-2 border-cyan-500/50 pl-4">
              “This tool helped our startup go from invisible to viral. It's like hiring a team of 10 marketers, instantly.”  
              <span className="block mt-2 text-cyan-400 font-semibold not-italic">— A Happy User</span>
            </div>
          </div>

          {/* RIGHT: Centered Rotating Text - Darkened */}
          <div className="flex-1 flex justify-center items-center h-full">
            <div className="ml-30 bg-[#0a0a0a] px-8 py-6 rounded-2xl shadow-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
              <RotatingText
                texts={[
                  '📝 AI-Powered Blogs',
                  '📧 Conversion Emails',
                  '📱 Viral Social Posts',
                  '🎯 Custom Tone Control',
                  '🔍 Smart SEO',
                  '📅 Auto Content Calendar',
                  '🏷 Trending Hashtags#'
                ]}
                mainClassName="text-4xl md:text-5xl font-extrabold text-cyan-300 tracking-wide drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
        </div>
      </div>
      <HomeF />
    </>
  )
}

export default Home2;