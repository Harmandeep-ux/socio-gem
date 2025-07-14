import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../api/axiosInstance';
import { BotMessageSquare } from 'lucide-react';
import Beams from '../../utils/Beams';

const GeminiTone = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [toneResult, setToneResult] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setToneResult('');
      setError('');
      const res = await axiosInstance.post('/generate-tone', data);
      setToneResult(res.data.result);
      reset();
    } catch (err) {
      console.error(err);
      setError('❌ Failed to translate tone.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white py-16 px-6 overflow-hidden">
      
      {/* 🌠 Background Animation */}
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

      {/* 💬 Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start justify-center">

        {/* 📝 Tone Translator Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-[50%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-xl space-y-5"
        >
          <div className="flex items-center gap-3 mb-2">
            <BotMessageSquare size={24} className="text-pink-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Tone Translator
            </h2>
          </div>

          <textarea
            {...register('inputText', { required: true })}
            placeholder="Enter your text here..."
            rows={6}
            className="w-full p-4 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500 text-sm"
          />

          <select
            {...register('targetTone', { required: true })}
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl text-white"
          >
            <option value="">🎯 Select Target Tone</option>
            <option value="Professional">Professional</option>
            <option value="Friendly">Friendly</option>
            <option value="Witty">Witty</option>
            <option value="Persuasive">Persuasive</option>
            <option value="Funny">Funny</option>
            <option value="Empathetic">Empathetic</option>
            <option value="Sarcastic">Sarcastic</option>
            <option value="Formal">Formal</option>
            <option value="Casual">Casual</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition-all"
          >
            {loading ? 'Translating...' : '🎯 Translate Tone'}
          </button>
        </form>

        {/* 📢 Output */}
        <div className="w-full lg:w-[50%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <h3 className="text-xl font-semibold mb-3 text-pink-400">🧠 Translated Output</h3>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {!toneResult && !error && (
            <p className="text-neutral-400">Your rewritten text will appear here after translation.</p>
          )}

          {toneResult && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-h-[400px] overflow-y-auto text-sm whitespace-pre-wrap">
              {toneResult}
              <p className="mt-4 text-neutral-400 text-xs">
                Tip: Use this tone-adjusted message in your emails, social posts, or scripts.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeminiTone;
