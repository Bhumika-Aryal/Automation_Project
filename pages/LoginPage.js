const {expect} = require ('@playwright/test');
exports.LoginPage = class LoginPage {
    constructor(page){
        this.page= page;

         //defining buttons/locators
         this.loginBtn= page.getByRole('button',{name:'Login'});
         this.email =page.getByRole('textbox',{name:'Email'});
         this.password=page.getByRole('textbox',{name:'Password'});
         this.btn=page.getByRole('button',{name:'Log in'});
    }
    //defining Actions
     async goto(){
             await this.page.goto('https://remoteaxle.com/');
        }
        async dologin(email,password){
            await this.loginBtn.click();
            await this.email.fill(email);
            await this.password.fill(password);
            await this.btn.click();
        }
    };







        