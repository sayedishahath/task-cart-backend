const express = require('express')
const { checkSchema } = require('express-validator')
const router = express.Router()

const cartValidationSchema = require('../validations/cart-validaion')
const cartCltr = require('../controllers/cart-controllers')
const { authenticateUser, authorizeUser } = require('../middlewares/auth')


router
    .route('/')
        .post(authenticateUser, checkSchema(cartValidationSchema), cartCltr.create)
        .get(authenticateUser, cartCltr.myCart)
        .delete(authenticateUser, cartCltr.emptyCart)
router
    .route('/inc/:id')
        .put(authenticateUser, cartCltr.incQty)
router
    .route('/dec/:id')
        .put(authenticateUser, cartCltr.decQty)
router
    .route('/:id')
        .delete(authenticateUser, cartCltr.removeLineItem)
        
module.exports = router