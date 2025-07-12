import mongoose from "mongoose";

const connectDb = async () =>{
    try{
        const  conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`db Connected ${conn.connection.host}`)
    }catch(err){
        console.log(err.message)
    }
}

export default connectDb