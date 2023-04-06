const express = require('express')
const cmsController = require('../controller/cmsController')
const router = express.Router()

// router.use((req, res, next) => {
//     console.log(req.session);
//     if(!req.session.userId){
//         const error = "Please Login First"
//         res.redirect(`/user/login?error=${error}`)
//     }
//     else{
//         next()
//     }
//   })

router.get('/', cmsController.showCategory)
router.get('/courses', cmsController.showCourse)

router.get('/courses/add', cmsController.renderAddForm)
router.post('/courses/add', cmsController.addData)

router.get('/courses/:id/edit', cmsController.getDataEdit)
router.post('/courses/:id/edit', cmsController.updateCourse)

router.get('/courses/:id/delete', cmsController.deleteCourse)



module.exports = router