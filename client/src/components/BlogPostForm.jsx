import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Beams from "../../utils/Beams";
import { Sparkles } from "lucide-react";
import axiosInstance from "../api/axiosInstance";

const BlogPostForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setResult("");
    try {
      const res = await axiosInstance.post("/generate-blog", data);
      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      setResult("❌ Failed to generate blog post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "blog-post.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white py-16 px-6 overflow-hidden">

      {/* 🌈 Background Beams */}
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

      {/* ✨ Foreground Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 justify-center items-start">
        
        {/* 📋 Input Form */}
        <div className="w-full lg:w-[45%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={26} className="text-purple-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Blog Post Generator
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("topic", { required: true })}
              placeholder="Blog Topic (e.g. How to grow on Instagram)"
              className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl focus:ring-2 ring-cyan-500 placeholder:text-neutral-500"
            />
            <input
              {...register("audience", { required: true })}
              placeholder="Target Audience (e.g. Social media managers)"
              className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl"
            />
            <input
              {...register("tone")}
              placeholder="Tone (e.g. Professional, Friendly)"
              className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl"
            />
            <input
              {...register("keywords")}
              placeholder="Focus Keywords (comma-separated)"
              className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl"
            />
            <select
              {...register("length")}
              className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl"
            >
              <option value="">Select Length</option>
              <option value="Short">Short</option>
              <option value="Medium">Medium</option>
              <option value="Long">Long</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition-all"
            >
              {loading ? "Generating..." : "✨ Generate Blog"}
            </button>
          </form>
        </div>

        {/* 🧠 Output Panel */}
        <div className="w-full lg:w-[45%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">🧠 Blog Output</h2>

          {!result && (
            <p className="text-neutral-400">Your AI-written blog post will appear here after generation.</p>
          )}

          {result && (
            <>
              <pre className="whitespace-pre-wrap bg-white/5 border border-white/10 p-4 rounded-xl max-h-[400px] overflow-auto text-sm text-white">
                {result}
              </pre>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={handleCopy}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-all"
                >
                  {copied ? "✅ Copied!" : "📋 Copy"}
                </button>

                <button
                  onClick={handleDownload}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-all"
                >
                  ⬇️ Download Markdown
                </button>
              </div>

              <p className="text-neutral-400 text-sm mt-6">
                💡 Tweak your tone, keywords, and length to regenerate better content for your target audience.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostForm;
