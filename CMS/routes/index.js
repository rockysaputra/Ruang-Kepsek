const express = require('express')
const router = express.Router()
const CMSRoute = require('./cms');
const userRoute = require('./user');

router.get('/', (req, res) => {
  res.redirect("/user/login")
})

router.use("/cms",CMSRoute)
router.use("/user",userRoute)

module.exports = router