class Controller {
    static showRegisterForm(request, respond){
        respond.render(`registerForm`, {data, title: `Register`})
    }
    static showLoginForm(){
        respond.render(`loginForm`, {data, title: `Login`})
    }
    static postLoginForm(){
        
    }
}
module.exports = Controller