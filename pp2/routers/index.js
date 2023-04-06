const express = require('express')
const Controller  = require(`../controllers/controller`)

const router = express.Router()


router.get(`/register`, Controller.showRegisterForm)
router.get(`/login`, Controller.showLoginForm)
router.post(`/login`, Controller.postLoginForm)
