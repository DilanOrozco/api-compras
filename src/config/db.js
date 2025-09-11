const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('✅ conexion exitosa a la db')
    }catch(err){
        console.log('❌ error de conexio', err)
    }
}

module.exports = connectDB