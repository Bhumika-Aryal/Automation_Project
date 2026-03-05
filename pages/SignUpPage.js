const {expect} = require ('@playwright/test');

exports.SignUpPage = class SignUpPage {
    constructor(page){
        this.page= page;
        //defining buttons/locators
        this.signupbtn = page.getByRole ('button',{name:'Sign Up'});
        this.namefield1 = page.getByRole ('textbox',{name:'First Name'});
        this.namefield2 = page.getByRole ('textbox',{name:'Last Name'});
        this.emailfield = page.getByRole ('textbox',{name:'Email'});
        this.passwordfield = page.getByRole ('textbox',{name:'Password',exact: true });
        this.confirm_passwordfield = page.getByRole ('textbox',{name:'Confirm Password'});

        this.createbtn = page.getByRole ('button',{name:'Create Account'});
    }

        //defining Actions
        async goto(){
             await this.page.goto('https://remoteaxle.com/');
        }
        async doSignUp(first_name,last_name,email,password,confirm_password){
           await this.signupbtn.click();
           await this.namefield1.fill(first_name);
           await this.namefield2.fill(last_name);
           await  this.emailfield.fill(email);
           await this.passwordfield.fill(password);
           await this.confirm_passwordfield.fill(confirm_password);
           await this.createbtn.click();


        }
};