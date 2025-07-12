import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const BlogPostForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setResult('');
    try {
      const res = await axios.post('http://localhost:5000/api/generate-blog', data);
      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      setResult('❌ Failed to generate blog post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'blog-post.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Blog Post Generator</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register('topic', { required: true })}
          placeholder="Blog Topic (e.g. How to grow on Instagram)"
          className="w-full p-3 border rounded"
        />

        <input
          {...register('audience', { required: true })}
          placeholder="Target Audience (e.g. Social media managers)"
          className="w-full p-3 border rounded"
        />

        <input
          {...register('tone')}
          placeholder="Tone (e.g. Professional, Friendly, Witty)"
          className="w-full p-3 border rounded"
        />

        <input
          {...register('keywords')}
          placeholder="Focus Keywords (comma-separated)"
          className="w-full p-3 border rounded"
        />

        <select {...register('length')} className="w-full p-3 border rounded">
          <option value="">Select Length</option>
          <option value="Short">Short</option>
          <option value="Medium">Medium</option>
          <option value="Long">Long</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Blog'}
        </button>
      </form>

      {result && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">🧠 Blog Output:</h3>
          <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded max-h-[500px] overflow-auto">
            {result}
          </pre>

          <div className="mt-4 flex gap-3">
            <button
              onClick={handleCopy}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              {copied ? '✅ Copied!' : '📋 Copy'}
            </button>

            <button
              onClick={handleDownload}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              ⬇️ Download Markdown
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostForm;
