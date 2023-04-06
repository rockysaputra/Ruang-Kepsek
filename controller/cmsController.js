const {Category,Course} = require("../models")
class cmsController{
    static showCategory(req,res){
        Category.findAll()
            .then((data)=>{
                res.render("cmsHome" , {data , title:"Category Page"})
            })
            .catch((err)=>{
                res.send(err)
            })
    }

    static showCourse(req,res){
        Course.findAll({
            include:{
                model:Category,
                attributes: ["name"]
            }
        })
            .then((data)=>{
                // res.send(data)
                res.render("cmsCourses",{data , title:"List Courses"})
            })
            .catch((err)=>{
                res.send(err)
            })
    }

    static renderAddForm(req,res){
        const {error} = req.query
        Category.findAll()
            .then((data)=>[
                res.render("addCourseForm",{data , title:"Add Course",error})
            ])
            .catch((err)=>{
                res.send(err)
            })
    }

    static addData(req,res){
        const {name,description,duration,price,CategoryId} = req.body
        
        Course.create({
            name,description,duration,price,CategoryId
        })
            .then((data)=>{
                res.redirect("/cms/courses")
            })
            .catch((err)=>{
                if(err.name === "SequelizeValidationError"){
                    let error = err.errors.map((item)=>{
                        return item .message
                    })
                    res.redirect(`/cms/courses/add?error=${error}`)
                }
                else{
                    res.send(err)
                }
            })
    }

    static getDataEdit(req, res) {
        const id = req.params.id;
        const {error} = req.query
        Course.findByPk(id, {
          include: {
            model: Category,
          },
        })
          .then((data) => {
            Category.findAll()
              .then((categories) => {
                res.render('editCourseForm', {categories, data , title:"Edit Form Page",error});
                // res.send({data,categories})
              })
          })
          .catch((err) => {
            res.send(err);
          });
      }
      
      static updateCourse(req,res){
        const {id} = req.params
        const{name,description,photoURL,duration,price,CategoryId} = req.body
        Course.update({
                name,description,photoURL,duration,price,CategoryId
            },
            {
                where:{id}
            }
        )
            .then((data)=>{
                res.redirect("/cms/courses")
            })
            .catch((err)=>{
                if(err.name === "SequelizeValidationError"){
                    let error = err.errors.map((item)=>{
                        return item .message
                    })
                    res.redirect(`/cms/courses/${id}/edit?error=${error}`)
                }
                else{
                    res.send(err)
                }
            })
      }

      static deleteCourse(req,res){
        const {id} = req.params
        let name = ""
        Course.findByPk(id)
            .then((data)=>{
                name = data.name
                return Course.destroy({where : {id}})
            })
            .then((data)=>{
                res.redirect("/cms/courses")
            })
            .catch((err)=>{
                res.send(err)
            })
      }
}


module.exports = cmsController