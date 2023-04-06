const {User} = require("../models")
const bcryptjs = require("bcryptjs")

class Controller{
    static readUser(req,res){
        User.findAll()
            .then((data)=>{
                // res.send(data)
                res.render("userHome" ,{data,title:"List Users"})
            })
            .catch((err)=>{
                res.send(err)
            })
    }

    static deleteUser(req,res){
        const {id} = req.params
        User.destroy({
            where: {id}
        })
        .then((data)=>{
            res.redirect("/user")
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static registerForm(req,res){
        res.render("auth-user/register-form" ,{title:"Register Page"})
    }

    static postRegister(req,res){
        const{name,email,role,password} = req.body
        User.create({
            name,email,role,password
        })
        .then((data)=>{
            res.redirect("/user/login")
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    

    static loginForm(req,res){
        const error = req.query.error
        res.render("auth-user/login-form" ,{title:"login Page" , error})
    }

    static postLogin(req,res){
        const {email,password} = req.body

        User.findOne({
            where:{email}
        })
            .then((user)=>{
                if(user){
                    const isValid = bcryptjs.compareSync(password,user.password)
                    // console.log(isValid)
                    if(isValid && user.role==="admin"){
                        req.session.userId = user.id
                        return res.redirect("/cms")
                    }
                    else{
                        const error = `Invalid Username / Password`
                        return res.redirect(`/user/login?error=${error}`)
                    }
                }
                else{
                    const error = `Invalid Username / Password`
                    return res.redirect(`/user/login?error=${error}`)
                }
            
            })
            .catch(err => res.send(err))
    }
}


module.exports = Controller