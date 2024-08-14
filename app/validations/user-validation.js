const User = require('../models/user-model')
const roles = require('../../utils/roles')
const registerValidationSchema = {
    username:{
        notEmpty:{
            errorMessage:'username is required'
        },
    },
    email:{
        notEmpty:{
            errorMessage:'email is required'
        },
        isEmail:{
            errorMessage:'invalid email'
        },
        custom:{
            options : async function (value){
                const user = await User.findOne({email:value})
                if(!user){
                    return true
                }else{
                    throw new Error('email already exist')
                }
            }
        },
        trim:true,
        normalizeEmail:true
    },
    password:{
        notEmpty:{
            errorMessage:'password is required'
        },
        isLength:{
            options:{min:8,max:120},
            errorMessage:'password must be between 8 and 120 characters long'
        }
    }
}

const  loginValidationSchema={
    username:{
        notEmpty:{
            errorMessage: 'email is required'
        },
        trim:true,
    },
    password:{
        notEmpty:{
            errorMessage:'password is required'
        },
        isLength:{
            options:{min:8,max:120},
            errorMessage:'password must be between 8 and 120 characters long'
        },
        trim:true
    }
}






module.exports ={
    registerValidationSchema,
    loginValidationSchema,
}