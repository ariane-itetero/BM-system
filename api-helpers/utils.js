import mongoose from 'mongoose'

export const connectToDatabase=async()=>{

await mongoose
.connect("mongodb+srv://admin:ariane130@cluster0.k45feyo.mongodb.net/?retryWrites=true&w=majority"
,{useNewUrlParser:true,
 useUnifiedTopology:true}
).then(()=>console.log("Connected"))
.catch(err=>console.log(err))
} 