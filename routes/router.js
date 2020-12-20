const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.cookie('nombre',req.query.nombre)   
})

router.get('/leer',(req,res)=>{
    res.send(`nombre ${req.cookies.nombre}`)
    console.log(req.cookies)
})

module.exports = router