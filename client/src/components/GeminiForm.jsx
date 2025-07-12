import React from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../api/axiosInstance';

const GeminiForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axiosInstance.post('/generate', data,{
         headers: {
    'Content-Type': 'application/json',
  }}
      );
      console.log(res.data);
    } catch (error) {
      console.error("Error generating posts:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          🚀 Generate Social Media Posts
        </h2>

        <input
          {...register('product')}
          placeholder="Product"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          {...register('tone')}
          placeholder="Tone (e.g., Funny, Formal)"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          {...register('audience')}
          placeholder="Audience"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          {...register('platform')}
          placeholder="Platform (e.g., Instagram)"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Generate Posts
        </button>
      </form>
    </div>
  );
};

export default GeminiForm;
