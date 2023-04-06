class Controller {
    static showRegisterForm(request, respond){
        respond.render(`registerForm`, {title: `Register`})
    }
    static showLoginForm(){
        respond.render(`loginForm`, {title: `Login`})
    }
    static postLoginForm(){
        
    }
}
module.exports = Controller