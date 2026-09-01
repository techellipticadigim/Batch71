import { test, expect } from '@playwright/test';
import loginData from '../test-data/userdata.json' with {type: "json"}

for(let i = 0; i < loginData.length; i++){
let loginCred = loginData[i];
test(` testcase for ${loginCred.username} @sanity`, async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(loginCred.username);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(loginCred.password);
  await page.locator('[data-test="login-button"]').click();
});
}