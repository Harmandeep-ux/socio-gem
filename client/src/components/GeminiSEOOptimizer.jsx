import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../api/axiosInstance';
import Beams from '../../utils/Beams';
import { Search } from 'lucide-react';

const GeminiSEOOptimizer = () => {
  const { register, handleSubmit, reset } = useForm();
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setResult('');
    setError('');
    try {
      const res = await axiosInstance.post('/optimize-seo', data);
      setResult(res.data.result);
    } catch (err) {
      console.error('SEO Optimization Failed', err);
      setError('❌ Optimization failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white py-16 px-6 overflow-hidden">

      {/* 🌌 Beams Background */}
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

      {/* 🧠 Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start justify-center">

        {/* ✍️ Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-[50%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-xl space-y-5"
        >
          <div className="flex items-center gap-3 mb-2">
            <Search size={24} className="text-green-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
              SEO Optimizer
            </h2>
          </div>

          <textarea
            {...register('content', { required: true })}
            placeholder="Paste your blog or web content here"
            rows={8}
            className="w-full p-4 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500 text-sm"
          />

          <input
            {...register('topic')}
            placeholder="Topic (optional)"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />
          <input
            {...register('audience')}
            placeholder="Target Audience (optional)"
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-700 rounded-xl placeholder:text-neutral-500"
          />

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold py-3 rounded-xl hover:scale-[1.02] transition-all"
            >
              {loading ? 'Optimizing...' : '⚡ Optimize SEO'}
            </button>

            <button
              type="button"
              onClick={() => {
                reset();
                setResult('');
                setError('');
              }}
              className="text-sm text-neutral-400 hover:underline"
            >
              Clear
            </button>
          </div>
        </form>

        {/* 📢 Output Section */}
        <div className="w-full lg:w-[50%] bg-[#111111]/80 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <h3 className="text-xl font-semibold mb-3 text-green-400">
            🔍 Optimized SEO Output
          </h3>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {!result && !error && (
            <p className="text-neutral-400">
              Optimized version of your content will appear here after generation.
            </p>
          )}

          {result && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-h-[400px] overflow-y-auto text-sm whitespace-pre-wrap">
              {result}

              <p className="mt-4 text-neutral-400 text-xs">
                Tip: Use these suggestions to boost on-page SEO and readability.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeminiSEOOptimizer;
