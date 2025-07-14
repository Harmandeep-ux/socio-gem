import { useForm } from "react-hook-form";
import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Sparkles } from "lucide-react";
import Beams from "../../utils/Beams";

function GeminiHash() {
  const { register, handleSubmit } = useForm();
  const [hashtags, setHashtags] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("/generate-hashtag", data);
      const hashtagsArray = res.data.result.split(/\s+/);
      setHashtags(hashtagsArray);
    } catch (err) {
      alert("Something went wrong while generating hashtags.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white py-16 px-6 overflow-hidden">

      {/* 🔮 Beams Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* 🎯 Foreground */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 justify-center items-start">

        {/* 🧠 Form Panel */}
        <div className="w-full lg:w-[45%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={26} className="text-purple-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Hashtag Generator AI
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("topic", { required: true })}
              placeholder="Enter topic or product"
              className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl focus:ring-2 ring-cyan-500 placeholder:text-neutral-500"
            />
            <select
              {...register("platform")}
              className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl"
            >
              <option value="Instagram">Instagram</option>
              <option value="TikTok">TikTok</option>
              <option value="LinkedIn">LinkedIn</option>
            </select>
            <select
              {...register("type")}
              className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl"
            >
              <option value="Mixed">Mixed</option>
              <option value="Niche">Niche</option>
              <option value="Trending">Trending</option>
            </select>
            <input
              {...register("audience")}
              placeholder="Target audience (optional)"
              className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl"
            />
            <input
              {...register("tone")}
              placeholder="Tone (e.g., fun, professional)"
              className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition-all"
            >
              {loading ? "Generating..." : "✨ Generate Hashtags"}
            </button>
          </form>
        </div>

        {/* 🔍 Result Panel */}
        <div className="w-full lg:w-[45%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">🔍 AI-Generated Hashtags</h2>

          {hashtags.length === 0 && (
            <p className="text-neutral-400">Your hashtags will appear here after generation.</p>
          )}

          {hashtags.length > 0 && (
            <>
              <div className="flex flex-wrap gap-3 max-h-[400px] overflow-y-auto mt-2">
                {hashtags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-white shadow hover:bg-white/10 transition-all"
                  >
                    #{tag.replace(/#/g, "")}
                  </span>
                ))}
              </div>

              {/* 💬 AI Note & Copy Button */}
              <div className="mt-6 text-neutral-400 text-sm leading-relaxed">
                💡 Use these AI-crafted hashtags to increase reach and engagement across your selected platform.  
                <br />
                Want more reach? Combine trending, niche, and branded tags!
                <div className="mt-4">
                  <button
                    onClick={() => navigator.clipboard.writeText(hashtags.map(h => `#${h.replace(/#/g, "")}`).join(" "))}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md text-sm transition-all"
                  >
                    📋 Copy All Hashtags
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default GeminiHash;
