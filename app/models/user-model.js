const {Schema,model} = require('mongoose')
const userSchema = new Schema({
    username:String,
    email:String,
    password:String,
    // role:String,
    jwtToken:{
        type:String,
        default:null
    }
},{timestamps:true})

const User = model('User',userSchema)
module.exports = User
