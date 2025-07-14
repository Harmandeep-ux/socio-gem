import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../api/axiosInstance';
import { Bot } from 'lucide-react';
import Beams from '../../utils/Beams';

const GeminiForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setResult('');
    setError('');
    try {
      const res = await axiosInstance.post('/generate', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setResult(res.data.result || "⚠️ No result generated.");
      reset();
    } catch (err) {
      console.error("Post generation failed:", err);
      setError("❌ Something went wrong while generating the post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white py-16 px-6 overflow-hidden">
      
      {/* 🌠 Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={10}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.5}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* 📄 Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start justify-center">
        
        {/* 🧾 Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-[50%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-xl space-y-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <Bot className="text-cyan-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Social Post Generator
            </h2>
          </div>

          <input
            {...register('product')}
            placeholder="Product / Service"
            required
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />
          <input
            {...register('tone')}
            placeholder="Tone (e.g. Friendly, Formal)"
            required
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />
          <input
            {...register('audience')}
            placeholder="Target Audience"
            required
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />
          <input
            {...register('platform')}
            placeholder="Platform (e.g. Instagram)"
            required
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition-all"
          >
            {loading ? 'Generating...' : '✨ Generate Post'}
          </button>
        </form>

        {/* 📢 Output Section */}
        <div className="w-full lg:w-[50%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">🧠 AI Generated Post</h3>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {!result && !error && (
            <p className="text-neutral-400">Generated post will appear here after submission.</p>
          )}

          {result && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-h-[400px] overflow-y-auto text-sm whitespace-pre-wrap">
              {result}

              <p className="mt-4 text-neutral-400 text-xs">
                Pro Tip: Schedule this post in Buffer, ClickUp or use it for captions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeminiForm;
