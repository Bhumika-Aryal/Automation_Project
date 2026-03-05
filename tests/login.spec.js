const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');

test('Simple Login Test',async({page}) => {
     test.setTimeout(100000);
    const login= new LoginPage(page);
    await login.goto();
    await login.dologin('abx@cxy.com','1234567888');

    await expect (page.getByText('ClassRoomsHave a code?')).toBeVisible();
});
