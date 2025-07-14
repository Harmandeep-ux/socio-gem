import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useForm } from "react-hook-form";
import Beams from "../../utils/Beams";
import { Megaphone } from "lucide-react";

const GeminiAdCopy = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("/generate-ad-copy", data);
      setResult(res.data.result);
    } catch (error) {
      console.error("Ad Copy Generation Failed", error);
      setResult("❌ Ad copy generation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white py-16 px-6 overflow-hidden">
      
      {/* 🔮 Background Beams */}
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

      {/* 🎯 Foreground Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 justify-center items-start">
        
        {/* 🧾 Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-[45%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-xl space-y-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <Megaphone size={24} className="text-green-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Ad Copy Generator AI
            </h2>
          </div>

          <input
            {...register("product", { required: true })}
            placeholder="Product or Service"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />
          <input
            {...register("audience", { required: true })}
            placeholder="Target Audience"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />
          <input
            {...register("platform", { required: true })}
            placeholder="Platform (Meta, Google, etc)"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />
          <input
            {...register("tone", { required: true })}
            placeholder="Tone (Professional, Witty, etc)"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />
          <input
            {...register("adType", { required: true })}
            placeholder="Ad Type (Sales, Lead Gen, etc)"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition-all"
            >
              {loading ? "Generating..." : "🚀 Generate Copy"}
            </button>
            <button
              type="button"
              onClick={() => {
                reset();
                setResult("");
              }}
              className="text-sm text-neutral-400 hover:text-neutral-200"
            >
              Clear
            </button>
          </div>
        </form>

        {/* 📢 Output Section */}
        <div className="w-full lg:w-[45%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <h3 className="text-xl font-semibold mb-3 text-green-400">📢 Generated Ad Copy</h3>

          {!result && (
            <p className="text-neutral-400">
              Your AI-powered ad copy will appear here after generation.
            </p>
          )}

          {result && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-h-[400px] overflow-y-auto text-sm text-white whitespace-pre-wrap">
              {result}
              <p className="mt-4 text-neutral-400 text-sm">
                💡 You can customize this further based on the campaign objective or brand style.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeminiAdCopy;
