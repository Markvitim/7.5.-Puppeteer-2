const { Given, When, Then, Before, After, And } = require("@cucumber/cucumber");
const puppeteer = require("puppeteer");
const expect = require("chai").expect;
const { getText, click } = require("../../lib/response.js");

Before(async function () {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300,
  });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(80000);
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("go to the page {string}", { timeout: 80000 }, async function (string) {
  return await this.page.goto(string);
});
When(
  "choose date by selector {string}",
  { timeout: 80000 },
  async function (string) {
    await this.page.waitForSelector(string);
    return this.page.click(string);
  }
);
When(
  "choose time by selector {string}",
  { timeout: 80000 },
  async function (string) {
    await this.page.waitForSelector(string);
    return this.page.click(string);
  }
);
When(
  "choose chair by selector {string}",
  { timeout: 80000 },
  async function (string) {
    await this.page.waitForSelector(string);
    return this.page.click(string);
  }
);
When("confirm booking {string}", { timeout: 80000 }, async function (string) {
  await this.page.waitForSelector(string);
  return this.page.click(string);
});
When(
  "getting booking code {string}",
  { timeout: 80000 },
  async function (string) {
    await this.page.waitForSelector(string);
    return this.page.click(string);
  }
);

Then("ticket received {string}", async function (string) {
  const actual = await getText(this.page, "h2");
  expect(actual).contain(string);
});
