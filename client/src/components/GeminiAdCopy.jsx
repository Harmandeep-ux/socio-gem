import React, { useState } from 'react'
import axiosInstance from '../api/axiosInstance';
import { useForm } from 'react-hook-form';

const GeminiAdCopy = () => {
   const { register, handleSubmit, reset } = useForm();
   const [loading, setloading] = useState(false)
  const [result, setResult] = useState('');

  const onSubmit = async (data) => {
    try {
        setloading(true)
      const res = await axiosInstance.post('/generate-ad-copy', data);
      setResult(res.data.result);
    } catch (error) {
      console.error("Ad Copy Generation Failed", error);
      setResult("❌ Ad copy generation failed.");
    }finally{
        setloading(false)
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Ad Copy Generator</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("product", { required: true })} placeholder="Product or Service" className="w-full p-3 border border-gray-300 rounded" />
        <input {...register("audience", { required: true })} placeholder="Target Audience" className="w-full p-3 border border-gray-300 rounded" />
        <input {...register("platform", { required: true })} placeholder="Platform (Meta, Google, etc)" className="w-full p-3 border border-gray-300 rounded" />
        <input {...register("tone", { required: true })} placeholder="Tone (Professional, Witty, etc)" className="w-full p-3 border border-gray-300 rounded" />
        <input {...register("adType", { required: true })} placeholder="Ad Type (Sales, Lead Gen, etc)" className="w-full p-3 border border-gray-300 rounded" />

        <div className="flex gap-4">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">{loading ? "Generating..." : "Generate"}</button>
          <button type="button" onClick={() => { reset(); setResult(""); }} className="text-sm text-gray-500">Clear</button>
        </div>
      </form>

      {result && (
        <div className="mt-6 bg-gray-100 border p-4 rounded whitespace-pre-wrap">
          <h3 className="font-semibold text-lg mb-2">🎯 Generated Ad Copy:</h3>
          <div>{result}</div>
        </div>
      )}
    </div>
  );
};


export default GeminiAdCopy