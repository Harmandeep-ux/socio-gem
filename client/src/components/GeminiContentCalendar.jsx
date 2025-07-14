import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../api/axiosInstance";
import Beams from "../../utils/Beams";
import { CalendarDays } from "lucide-react";

const ContentCalendarForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [calendar, setCalendar] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setCalendar("");
    setError("");
    try {
      const res = await axiosInstance.post("/generate-content-calendar", data);
      setCalendar(res.data.result); // assume plain text format
      reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong while generating the content calendar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white py-16 px-6 overflow-hidden">
      
      {/* 🌌 Background Beams */}
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

      {/* 📅 Foreground Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 justify-center items-start">
        
        {/* 🧾 Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-[45%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-xl space-y-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <CalendarDays size={24} className="text-blue-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Content Calendar Generator
            </h2>
          </div>

          <input
            {...register("platform")}
            placeholder="Platform (e.g. Instagram)"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
            required
          />
          <input
            {...register("goal")}
            placeholder="Campaign Goal (e.g. Brand Awareness)"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
            required
          />
          <input
            {...register("duration")}
            placeholder="Duration (e.g. 7, 14, or 30 days)"
            type="number"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
            required
          />
          <input
            {...register("product")}
            placeholder="Product/Event Name"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
            required
          />
          <input
            {...register("tone")}
            placeholder="Tone (e.g. Fun, Professional)"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
            required
          />
          <input
            {...register("audience")}
            placeholder="Target Audience (optional)"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition-all"
            disabled={loading}
          >
            {loading ? "Generating..." : "📅 Generate Calendar"}
          </button>
        </form>

        {/* 📆 Calendar Output */}
        <div className="w-full lg:w-[45%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <h3 className="text-xl font-semibold mb-3 text-blue-400">🧠 Generated Content Calendar</h3>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {!calendar && !error && (
            <p className="text-neutral-400">Your content plan will appear here after generation.</p>
          )}

          {calendar && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-h-[400px] overflow-y-auto text-sm whitespace-pre-wrap">
              {calendar}

              {/* ✍️ Optional Tip */}
              <p className="mt-4 text-neutral-400 text-xs">
                Pro Tip: Use this plan to schedule your posts weekly in Notion, ClickUp or Buffer.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCalendarForm;
