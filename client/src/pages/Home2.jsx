import RotatingText from '../../utils/RotatingText';
import Aurora from "../../utils/Aurora";
import { Link } from 'react-router-dom';


const Home2 = () => {
  return (
    <div className="relative w-full min-h-screen py-24 text-white overflow-hidden">

  {/* 🔮 Aurora Background Layer */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Aurora
      colorStops={["#0d0d0d", "#1a1a1a", "#111111"]}
      blend={0.1}
      amplitude={0.4}
      speed={0.4}
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
            0 0 10px rgba(0, 255, 255, 0.8),
            0 0 20px rgba(0, 255, 255, 0.6),
            0 0 30px rgba(0, 255, 255, 0.4)
          `,
        }}
      >
        Welcome to the<br />
        <span className="text-cyan-300">Era of AI</span>
      </h1>

      <p
        className="mt-6 text-xl md:text-2xl max-w-lg text-white font-semibold"
        style={{
          textShadow: `
            0 0 5px rgba(255, 255, 255, 0.3),
            0 0 10px rgba(255, 255, 255, 0.4),
            0 0 15px rgba(0, 255, 255, 0.3)
          `,
        }}
      >
        Automate. Create. Dominate. Fuel your content game with intelligent AI tools.
      </p>

      <div className="mt-8">
        <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg rounded-full shadow-lg transition-all animate-pulse">
        <Link to='/layout'>Try AI Tools Now 🚀</Link>  
        </button>
      </div>

      {/* Why AI Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-300">
        {[
          { icon: "🚀", title: "Speed", desc: "Create weeks of content in minutes." },
          { icon: "🎯", title: "Precision", desc: "Optimized copy for your exact audience." },
          { icon: "💡", title: "Creativity", desc: "AI gives endless content variations." },
          { icon: "💰", title: "Saves Cost", desc: "Reduce the need for large teams." }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] rounded-xl p-4 shadow-lg hover:shadow-cyan-500/30 transition"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-bold text-white">{item.title}</div>
            <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="mt-10 italic text-gray-300 text-sm max-w-md">
        “This tool helped our startup go from invisible to viral. It’s like hiring a team of 10 marketers, instantly.”  
        <span className="block mt-2 text-cyan-400 font-semibold">— A Happy User</span>
      </div>
    </div>

    {/* ✅ RIGHT: Centered Rotating Text */}
    <div className="flex-1 flex justify-center items-center h-full">
  <div className="ml-30 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-8 py-6 rounded-2xl shadow-xl border border-cyan-500/30">
    <RotatingText
      texts={[
        '📝 AI-Powered Blogs',
        '📧 Conversion Emails',
        '📱 Viral Social Posts',
        '🎯 Custom Tone Control',
        '🔍 Smart SEO',
        '📅 Auto Content Calendar',
        '🏷 Trending Hashtags#',
      ]}
      mainClassName="text-4xl md:text-5xl font-extrabold text-cyan-300 tracking-wide drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
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
  )
}

export default Home2