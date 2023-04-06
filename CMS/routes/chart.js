const express = require('express')
const ChartJs = require('../controller/chartJsController')
const router = express.Router()

router.get("/",ChartJs.showChart)


module.exports = router