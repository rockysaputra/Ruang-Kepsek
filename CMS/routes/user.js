const express = require('express')
const userController = require('../controller/userController')
const router = express.Router()

router.get("/",userController.readUser)


router.get("/register",userController.registerForm)
router.post("/register",userController.postRegister)

router.get("/login",userController.loginForm)
router.post("/login",userController.postLogin)



router.get("/:id/delete",userController.deleteUser)


module.exports = router