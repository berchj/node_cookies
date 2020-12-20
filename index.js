const express = require('express')
const app = express()
const port = 5000
const cookieParser = require('cookie-parser')
const router = require('./routes/router')
app.use(cookieParser())
app.use(router)
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})