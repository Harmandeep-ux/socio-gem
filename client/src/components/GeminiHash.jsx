import { useForm } from "react-hook-form";
import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

function GeminiHash() {
  const { register, handleSubmit } = useForm();
  const [hashtags, setHashtags] = useState([]);
  const [loading, setloading] = useState(false)

  const onSubmit = async (data) => {
    try {
      setloading(true)
      const res = await axiosInstance.post('/generate-hashtag',data);
    const hashtagsArray = res.data.result.split(/\s+/); 
      setHashtags(hashtagsArray);
    } catch (err) {
      alert("Error generating hashtags",err);
    alert("Something went wrong while generating hashtags.")
    }finally{
        setloading(false)
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("topic", { required: true })} placeholder="Enter topic or product" className="w-full p-2 border rounded" />
        <select {...register("platform")} className="w-full p-2 border rounded">
          <option value="Instagram">Instagram</option>
          <option value="TikTok">TikTok</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>
        <select {...register("type")} className="w-full p-2 border rounded">
          <option value="Mixed">Mixed</option>
          <option value="Niche">Niche</option>
          <option value="Trending">Trending</option>
        </select>
        <input {...register("audience")} placeholder="Target audience (optional)" className="w-full p-2 border rounded" />
        <input {...register("tone")} placeholder="Tone (e.g., fun, professional)" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            {loading ? "Generating..." : "Generate"}
        </button>
      </form>

      <div className="mt-6">
        {hashtags.length > 0 && (
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="font-bold mb-2">📌 Suggested Hashtags:</h2>
            <div className="flex flex-wrap gap-2">
              {hashtags.map((tag, i) => (
                <span key={i} className="bg-white border px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GeminiHash;
