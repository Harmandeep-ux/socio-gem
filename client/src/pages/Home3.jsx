import { Sparkles, Cpu, MousePointerClick } from "lucide-react";
import Home4 from "./Home4";

const features = [
  {
    icon: <Sparkles size={28} className="text-indigo-500 group-hover:rotate-12 transition-transform duration-300" />,
    title: "Lightning Fast",
    description: "Experience blazing-fast responses powered by cutting-edge AI models.",
  },
  {
    icon: <Cpu size={28} className="text-emerald-500 group-hover:scale-125 transition-transform duration-300" />,
    title: "Smart & Accurate",
    description: "Trained on massive datasets to give you highly intelligent outputs.",
  },
  {
    icon: <MousePointerClick size={28} className="text-pink-500 group-hover:translate-y-1 transition-transform duration-300" />,
    title: "Effortless Use",
    description: "Just enter your input and let the AI do the rest. No learning curve.",
  },
];

const Home3 = () => {
  return (
    <>
    <section className="w-full py-20 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Why Choose Our AI?
        </h2>
        <p className="mb-12 text-gray-400 max-w-2xl mx-auto">
          Unlock the power of artificial intelligence with a tool built for performance, accuracy, and ease of use.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#1a1a1a] p-6 rounded-2xl border border-neutral-800 hover:border-pink-500 hover:bg-[#1f1f1f] hover:shadow-pink-500/20 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Home4 />
    </>
  );
};

export default Home3;
