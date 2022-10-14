const {
  Given,
  When,
  Then,
  Before,
  After,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const puppeteer = require("puppeteer");
const expect = require("chai");
const { useCucumber, clickElement } = require("../../lib/commands.js");

//setDefaultTimeout(100000);

Before(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300,
  });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(80000);
  this.browser = browser;
  this.page = page;
});

After(async () => {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("go to the page {string}", { timeout: 80000 }, async function (string) {
  return await this.page.goto(string);
});
When("choose date by selector {string} #Empty", async function (string) {
  console.log(string);
  await this.page.clickElement(this.page, string);
  //return "pending";
});
Then("ticket received {string}", async function (string) {
  console.log(string);
  const element = await this.page.waitForSelector(".page-nav > a > span");
  expect(element).contains(string);
});
