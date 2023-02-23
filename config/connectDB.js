const mongoose=require('mongoose');


const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.URLDB)
        console.log("data base is connected")
    } catch (error) {
        console.log(error)
        
    }
    

}

module.exports=connectDB;