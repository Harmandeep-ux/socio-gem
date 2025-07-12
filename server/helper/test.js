import { main } from "../services/gemini.service.js"

export  const testGeminiApi =  (req,res)=>{
    try{
        main()
       console.log(`API key Loaded`, process.env.GEMINI_API_KEY ? 'Yes' : 'No')
       return res.status(200).json({msg:"loaded"})
    }catch(err){
     return res.status(500).json({err:err.message})
    }
}