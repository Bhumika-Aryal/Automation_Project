import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://remoteaxle.com/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('bhumee');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('aryal');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ary@gmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('123789456');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('123789456');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByRole('heading', { name: 'Email Verification' })).toBeVisible();
  await page.getByRole('heading', { name: 'Email Verification' }).click();
  await page.getByText('Email has been sent to your').click();
  await page.getByRole('button', { name: 'Go to Login' }).click();
});