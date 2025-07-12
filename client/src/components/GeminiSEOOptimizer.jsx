import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../api/axiosInstance';

const GeminiSEOOptimizer = () => {
  const { register, handleSubmit, reset } = useForm();
  const [result, setResult] = useState("");
  const [loading, setloading] = useState(false)

  const onSubmit = async (data) => {
    try {
        setloading(true)
      const res = await axiosInstance.post("/optimize-seo", data);
      setResult(res.data.result);
    } catch (error) {
      console.error("SEO Optimization Failed", error);
      setResult("❌ Optimization failed. Please try again.");
    }finally{
        setloading(false)
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">SEO Optimizer</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <textarea
          {...register("content", { required: true })}
          placeholder="Paste your blog or website content here"
          rows={10}
          className="w-full p-3 border border-gray-300 rounded"
        />

        <input
          {...register("topic")}
          placeholder="Topic (optional)"
          className="w-full p-3 border border-gray-300 rounded"
        />

        <input
          {...register("audience")}
          placeholder="Target Audience (optional)"
          className="w-full p-3 border border-gray-300 rounded"
        />

        <div className="flex items-center gap-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {loading ? "Optimizing..." : "Optimize"}
          </button>
          <button type="button" onClick={() => { reset(); setResult(""); }} className="text-sm text-gray-500">
            Clear
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-6 bg-gray-100 border p-4 rounded whitespace-pre-wrap">
          <h3 className="font-semibold text-lg mb-2">🔍 Optimized SEO Output:</h3>
          <div>{result}</div>
        </div>
      )}
    </div>
  );
};

export default GeminiSEOOptimizer;
