const express = require('express')
const { checkSchema } = require('express-validator')
const router = express.Router()

const userCtrl = require("../controllers/user-controller")
const {registerValidationSchema,loginValidationSchema} = require('../validations/user-validation')
const { authenticateUser, authorizeUser } = require('../middlewares/auth')


router
    .route('/register')
        .post(checkSchema(registerValidationSchema),userCtrl.register)
router
    .route('/login')
        .post(checkSchema(loginValidationSchema),userCtrl.login)
router
    .route('/account')
        .get(authenticateUser,userCtrl.account)
        
        
module.exports = router