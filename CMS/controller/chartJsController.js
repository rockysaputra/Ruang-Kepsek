const {Course,Category} = require('../models');

class ChartJs{
    static showChart(req,res){

        Category.findAll({
            include:{
                model:Course,
                attributes:["name"]
            }
        })
            .then((data)=>{
                let name = data.map((el)=>{
                    return el.name
                })
                let count = data.map((el)=>{
                    return el.Courses.length
                })
                // console.log(name,count);
                // res.send(count)
                res.render("chart-admin/chart" , {title:"Chart Page" , name,count})

            })
            .catch(err=>{
                res.send(err)
            })


        // res.render("chart-admin/chart" , {title:"Chart Page"})
    }
}


module.exports = ChartJs