require ('dotenv').config()
const express = require('express');
// const fileupload = require('express-fileupload'); 
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5001
const configureDB = require('./config/db')
const {checkSchema} = require('express-validator')

// const {authenticateUser, authorizeUser} = require('./app/middlewares/auth')

// const userCtrl = require('./app/controllers/user-controller')

configureDB()
app.use(cors())
app.use(express.json())

// User routes

const userRoutes = require('./app/routes/user-routes')
app.use('/api/users',userRoutes)



// cart routes
const cartRoutes = require('./app/routes/cart-routes')
app.use('/api/user/cart', cartRoutes)

app.listen(port,()=>{
    console.log(`listening to port ${port}` )
})