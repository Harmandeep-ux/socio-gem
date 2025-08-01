import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cors from 'cors'
import router from './routes/geminiRoutes.js'

dotenv.config()
const app = express()
 
app.use(express.json())
app.use(cors({
  origin: "https://socio-gem.vercel.app",
  methods: "GET,POST,PUT,DELETE,PATCH", // Corrected the methods string
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));


const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send("hii")
})

//routes 
app.use('/api',router)

app.listen(PORT,()=>{
    connectDb()
    console.log(`server running on ${PORT}`)
})
