const mongoose = require('mongoose')
const configureDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_REMOTE)
        console.log('Connected to MongoDB')
    }catch(err){
        console.log('Error connecting to MongoDB', err)
    }
}
module.exports = configureDB;