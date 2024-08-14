const mongoose = require('mongoose')
const { Schema, model } = mongoose

const cartSchema = ({
    customer : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    lineItems : [
        {
            productId:{
                type:Number,
            },
            productName:{
                type:String,
            },
            productImage:{
                type:String,
            },
            quantity : {
                type : Number,
                default : 1
            },
            price : Number
        }
    ],
    totalAmount : Number
})

const Cart = model('Cart', cartSchema)

module.exports = Cart