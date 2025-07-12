import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../api/axiosInstance';

const EmailGemini = () => {
  const { register, handleSubmit } = useForm();
  const [emailText, setEmailText] = useState('')
  const [loading, setLoading] = useState(false)
  
  const onsubmit = async(data)=>{
    setLoading(true)
    setEmailText('')
      try{
         const res = await axiosInstance.post('/generate-email',data)
         setEmailText(res.data.result)
      }catch(err){
        console.log(err.message)
      }finally{
        setLoading(false)
      }
  }
  return (
     
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

    <form onSubmit={handleSubmit(onsubmit)}
     className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl space-y-6">
     <h2 className="text-2xl font-bold text-center text-gray-800">
          ✉️ Auto Email Generator
        </h2>

        <input {...register('emailType')} placeholder="Email Type (e.g. Thank You, Follow-up)" className='input' required />
        <input {...register('product')} placeholder="Product/Service" className='input' required />
        <input {...register('recipient')} placeholder="Recipient (e.g. New customer)" className='input' required />
        <input {...register('tone')} placeholder='Tone eg(friendly ,formal , bold) ' className='input' required/>
        <button type='submit' disabled={loading}
       className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >{loading ? "Generating ..." : "Generate Email"}</button>

        {emailText && (
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mt-4">
                <h3 className="font-semibold mb-2 text-gray-700">Generate Email:</h3>
                <pre className="whitespace-pre-wrap text-sm text-gray-800">
                      {typeof emailText === 'string'
        ? emailText
        : JSON.stringify(emailText, null, 2)}
                </pre>
            </div>
        )}
    </form>
    </div>
  )
}

export default EmailGemini