import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../api/axiosInstance";
import Beams from "../../utils/Beams";
import { Mail } from "lucide-react";

const EmailGemini = () => {
  const { register, handleSubmit } = useForm();
  const [emailText, setEmailText] = useState("");
  const [loading, setLoading] = useState(false);

  const onsubmit = async (data) => {
    setLoading(true);
    setEmailText("");
    try {
      const res = await axiosInstance.post("/generate-email", data);
      setEmailText(res.data.result);
    } catch (err) {
      console.log(err.message);
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

      {/* ✨ Foreground Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 justify-center items-start">

        {/* 📬 Email Form */}
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="w-full lg:w-[45%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-xl space-y-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <Mail size={24} className="text-cyan-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Auto Email Generator
            </h2>
          </div>

          <input
            {...register("emailType")}
            placeholder="Email Type (e.g. Thank You, Follow-up)"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500"
            required
          />
          <input
            {...register("product")}
            placeholder="Product or Service"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500"
            required
          />
          <input
            {...register("recipient")}
            placeholder="Recipient (e.g. New customer)"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500"
            required
          />
          <input
            {...register("tone")}
            placeholder="Tone (e.g. Friendly, Formal, Bold)"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition-all"
          >
            {loading ? "Generating..." : "✨ Generate Email"}
          </button>
        </form>

        {/* 📩 Email Output */}
        <div className="w-full lg:w-[45%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">📩 Generated Email</h3>

          {!emailText && (
            <p className="text-neutral-400">Your AI-generated email will appear here after generation.</p>
          )}

          {emailText && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-h-[400px] overflow-y-auto text-sm text-white">
              <pre className="whitespace-pre-wrap">
                {typeof emailText === "string" ? emailText : JSON.stringify(emailText, null, 2)}
              </pre>
              <p className="mt-4 text-neutral-400 text-sm">
                💡 Make sure to customize the message for your brand voice and audience before sending.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailGemini;
