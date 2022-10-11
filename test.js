const {
  clickElement,
  assretNoElementValue,
  assretElementValue,
} = require("./lib/commands.js");
let page;

describe("test", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await page.setDefaultNavigationTimeout(0);
  });
  afterEach(() => {
    page.close();
  });
  test.only("one ticket booking today", async () => {
    await clickElement(page, ".page-nav > a:nth-child(1)");
    await clickElement(page, "section > div:nth-child(3) > ul > li");
    await clickElement(
      page,
      ".buying-scheme__wrapper > div:nth-child(1) > span:nth-child(2)"
    );
    await clickElement(page, "button.acceptin-button");
    await clickElement(page, "button.acceptin-button");
    await assretElementValue(
      page,
      "h2.ticket__check-title",
      "Электронный билет"
    );
    //const element = await page.waitForSelector("h2.ticket__check-title");
    //const value = await element.evaluate((el) => el.textContent, element);
    //expect(value).toEqual("Электронный билет");
  });

  test("booking another time two tickets", async () => {
    await clickElement(page, "nav>a:nth-child(3)");
    await clickElement(page, "section > div:nth-child(3) > ul > li");
    await clickElement(
      page,
      ".buying-scheme__wrapper > div:nth-child(1) > span:nth-child(1)"
    );
    await clickElement(
      page,
      ".buying-scheme__wrapper > div:nth-child(1) > span:nth-child(2)"
    );
    await clickElement(page, "button.acceptin-button");
    await clickElement(page, "button.acceptin-button");
    const element = await page.waitForSelector("h2.ticket__check-title");
    const value = await element.evaluate((el) => el.textContent, element);
    expect(value).toEqual("Электронный билет");
  });

  test("booking occupied place", async () => {
    await clickElement(page, ".page-nav > a:nth-child(1)");
    await clickElement(page, "section > div:nth-child(3) > ul > li");
    await clickElement(
      page,
      ".buying-scheme__wrapper > div:nth-child(2) > span:nth-child(2)"
    );
    await clickElement(page, "button.acceptin-button");
    await assretNoElementValue(page, "section", "Электронный билет");
    //const element = await page.waitForSelector("section");
    //const value = await element.evaluate((el) => el.textContent, element);
    //expect(value).toEqual(expect.not.stringContaining("Электронный билет"));
  });
});
