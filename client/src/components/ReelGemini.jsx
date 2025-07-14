import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../api/axiosInstance';
import { Clapperboard } from 'lucide-react';
import Beams from '../../utils/Beams';

const ReelGemini = () => {
  const { register, handleSubmit, reset } = useForm();
  const [script, setScript] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    setScript('');
    setError('');
    setLoading(true);
    try {
      const res = await axiosInstance.post('/generate-reel', data);
      setScript(res.data.result);
      reset();
    } catch (err) {
      console.error('Reel script generation failed:', err.message);
      setError('❌ Failed to generate script. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white py-16 px-6 overflow-hidden">
      
      {/* ✨ Animated Background */}
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

      {/* 🎥 Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start justify-center">
        
        {/* 🎬 Input Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-[50%] bg-[#111111]/80 backdrop-blur-md border border-neutral-800 rounded-3xl p-8 shadow-xl space-y-5"
        >
          <div className="flex items-center gap-3 mb-2">
            <Clapperboard className="text-yellow-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Reel Script Generator
            </h2>
          </div>

          <input
            {...register('product')}
            placeholder="Product or Event"
            required
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />

          <input
            {...register('platform')}
            placeholder="Platform (e.g., Instagram, TikTok)"
            required
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />

          <input
            {...register('tone')}
            placeholder="Tone (e.g., Funny, Emotional)"
            required
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />

          <input
            {...register('goal')}
            placeholder="Goal (e.g., Awareness, Sales)"
            required
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />

          <input
            {...register('duration')}
            type="number"
            placeholder="Duration in seconds (e.g., 30)"
            required
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />

          <textarea
            {...register('languageNote')}
            placeholder="Language style / notes (e.g., Hindi + English)"
            rows={4}
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition-all"
          >
            {loading ? '🎬 Generating...' : 'Generate Reel Script'}
          </button>
        </form>

        {/* 📜 Output Section */}
        <div className="w-full lg:w-[50%] bg-[#111111]/80 backdrop-blur-md border border-neutral-800 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-xl font-semibold mb-3 text-yellow-400">🧠 Generated Script</h3>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {!script && !error && (
            <p className="text-neutral-400">Your reel script will appear here after generation.</p>
          )}

          {script && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-h-[400px] overflow-y-auto text-sm whitespace-pre-wrap">
              {script}
              <p className="mt-4 text-neutral-400 text-xs">
                Pro Tip: Use this script for Reels, YouTube Shorts, or TikTok promos.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReelGemini;
