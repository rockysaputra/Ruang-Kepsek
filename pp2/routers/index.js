const express = require('express')
const Controller  = require(`../controllers/controller`)

const router = express.Router()

router.get("/" , (req,res)=>{
    res.redirect('/register')
})

router.get(`/register`, Controller.showRegisterForm)
router.get(`/login`, Controller.showLoginForm)
// router.post(`/login`, Controller.postLoginForm)
router.get("/index",(req,res)=>{
    res.render("index")
})

module.exports = router