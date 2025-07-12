import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axiosInstance from '../api/axiosInstance'

const GeminiTone = () => {

    const {register , handleSubmit,reset} = useForm()
    const [loading, setloading] = useState(false)
    const [toneResult ,setToneResult] = useState()

    const onSubmit = async(data) =>{
        try{
            setloading(true)
            const res = await axiosInstance.post('/generate-tone',data)
            setToneResult(res.data.result)
            reset()
        }catch(err){
            console.log(err)
        }finally{
            setloading(false)
        }

    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 max-w-xl mx-auto">
      <textarea
        {...register("inputText", { required: true })}
        placeholder="Enter text to translate"
        rows={5}
        className="w-full p-2 border rounded"
      />
      <select {...register("targetTone", { required: true })} className="w-full p-2 border rounded">
        <option value="">Select Target Tone</option>
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
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {loading ? 'Translating': 'Translate'}
      </button>

      {toneResult && (
        <div className="bg-gray-100 border mt-4 p-4 rounded-md whitespace-pre-wrap text-sm text-gray-800">
            <h4 className="font-medium mb-2 text-gray-700">🎥 Generated Script:</h4>
            {toneResult}
          </div>
      )}
    </form>

  )
}

export default GeminiTone