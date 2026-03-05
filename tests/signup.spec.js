const { test, expect } = require('@playwright/test');
const {SignUpPage} = require('../pages/SignUpPage');

test('Simple Sign Up Test',async({page}) => {
     
     test.setTimeout(100000);
    const signup= new SignUpPage(page);
    await signup.goto();
    await signup.doSignUp('bhumi','xyx','abxy@cxy.com','1234567888','1234567888');
    await expect(page.getByRole('heading', { name: 'Email Verification' })).toBeVisible();
    await expect(page.locator('text=Email has been sent')).toBeVisible();
});
