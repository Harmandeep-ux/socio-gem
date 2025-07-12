import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../api/axiosInstance";

const ContentCalendarForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = React.useState(false);
  const [calendar, setCalendar] = React.useState("");
  const [error, setError] = React.useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setCalendar("");
    setError("");
    try {
      const res = await axiosInstance.post('/generate-content-calendar', data);
      setCalendar(res.data.result);
      reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong while generating the content calendar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">📅 Content Calendar Generator</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("platform")}
          placeholder="Platform (e.g. Instagram)"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          {...register("goal")}
          placeholder="Campaign Goal (e.g. Brand Awareness)"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          {...register("duration")}
          placeholder="Duration (e.g. 7, 14, or 30 days)"
          type="number"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          {...register("product")}
          placeholder="Product/Event Name"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          {...register("tone")}
          placeholder="Tone (e.g. Fun, Professional)"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          {...register("audience")}
          placeholder="Target Audience (optional)"
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Calendar"}
        </button>
      </form>

      {error && (
        <div className="mt-4 text-red-600 font-medium text-center">{error}</div>
      )}

      {calendar && (
        <div className="mt-6 bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
          <h3 className="text-lg font-semibold mb-2">Generated Content Calendar:</h3>
          {calendar}
        </div>
      )}
    </div>
  );
};

export default ContentCalendarForm;
