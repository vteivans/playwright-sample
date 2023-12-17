import { test, expect } from "@playwright/test";

// Source: https://www.youtube.com/watch?v=wmy1Nu3X8l0&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=7

test("Selectors Demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  // Page pause will stop the test execution and allow to steop over the lines,
  // much like debugger
  await page.pause();
  //   using any object property
  await page.click("id=user-name");
  //   Any HTML attribute can be used here:
  await page.locator("id=user-name").fill("Edison");
  await page.locator('[id="user-name"]').fill("Enstain");
  console.log("");

  //   Use CSS Selector - can be simply copied in browser using inspect -> copy -> copy css selector
  // #login-button
  await page.locator("#login-button").click();

  // Playwright locator can also show the best locators for the elements in the page,
  // when "explore" button is clicked on a "paused" page
  // In the current version it's a small button "pick locator"
  // in the top menu.

  const errorMessage = await page
    .locator("div")
    .filter({ hasText: /^Epic sadface: Username is required$/ });
  console.log(errorMessage);

  // Using xpath - can find elements by xpath: //input[@name="password"]
  // some form of xpath can also be copied from the inspector: //*[@id="password"]
  //   await page.locator('xpath=//input[@name="password"]');
  await page.locator('//input[@name="password"]').fill("assword");

  // BY text
  const loginButton = await page.locator("text=Login").click();
  //   console.log(loginButton);

  await page.pause();
});
