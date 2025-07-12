import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../api/axiosInstance';

const ReelGemini = () => {
  const { register, handleSubmit,} = useForm();
  const [script, setScript] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setScript('');
    setLoading(true);
    try {
      const res = await axiosInstance.post('/generate-reel', data);
      setScript(res.data.result);
    } catch (err) {
      console.error("Reel script generation failed", err.message);
      setScript("❌ Failed to generate script. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 py-10 px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl space-y-5">
        <h2 className="text-2xl font-bold text-center text-gray-800">🎬 Reel Script Generator</h2>

        <input
          {...register('product')}
          placeholder="Product or Event"
          required
          className="input"
        />

        <input
          {...register('platform')}
          placeholder="Platform (e.g., Instagram, TikTok)"
          required
          className="input"
        />

        <input
          {...register('tone')}
          placeholder="Tone (e.g., Funny, Emotional, Dramatic)"
          required
          className="input"
        />

        <input
          {...register('goal')}
          placeholder="Goal (e.g., Awareness, Sales, Engagement)"
          required
          className="input"
        />

        <input
          {...register('duration')}
          type="number"
          placeholder="Duration in seconds (e.g., 30)"
          required
          className="input"
        />

        <textarea
          {...register('languageNote')}
          placeholder="Language style / notes (e.g., Hero speaks in Hindi, rest English)"
          className="input h-24 resize-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Generating..." : "Generate Reel Script"}
        </button>

        {script && (
          <div className="bg-gray-100 border mt-4 p-4 rounded-md whitespace-pre-wrap text-sm text-gray-800">
            <h4 className="font-medium mb-2 text-gray-700">🎥 Generated Script:</h4>
            {script}
          </div>
        )}
      </form>
    </div>
  );
};

export default ReelGemini;
