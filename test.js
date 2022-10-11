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

  test("one ticket booking today", async () => {
    const data = await page.waitForSelector(".page-nav > a:nth-child(1)");
    await data.click();
    const time = await page.waitForSelector("a.movie-seances__time");
    await time.click();
    const chair = await page.waitForSelector(
      ".buying-scheme__wrapper > div:nth-child(2) > span:nth-child(5)"
    );
    await chair.click();
    const booking = await page.waitForSelector("button.acceptin-button");
    await booking.click();
    const codeConfirmation = await page.waitForSelector(
      "button.acceptin-button"
    );
    await codeConfirmation.click();
    const element = await page.waitForSelector("h2.ticket__check-title");
    const value = await element.evaluate((el) => el.textContent, element);
    expect(value).toEqual("Электронный билет");
  });

  test("booking another time two tickets", async () => {
    const data = await page.waitForSelector("nav>a:nth-child(3)");
    await data.click();
    const time = await page.waitForSelector(
      "section > div:nth-child(3) > ul > li"
    );
    await time.click();
    const chair1 = await page.waitForSelector(
      ".buying-scheme__wrapper > div:nth-child(2) > span:nth-child(1)"
    );
    await chair1.click();
    const chair2 = await page.waitForSelector(
      ".buying-scheme__wrapper > div:nth-child(2) > span:nth-child(2)"
    );
    await chair2.click();
    const booking = await page.waitForSelector("button.acceptin-button");
    await booking.click();
    const codeConfirmation = await page.waitForSelector(
      "button.acceptin-button"
    );
    await codeConfirmation.click();
    const element = await page.waitForSelector("h2.ticket__check-title");
    const value = await element.evaluate((el) => el.textContent, element);
    expect(value).toEqual("Электронный билет");
  });

  test.only("booking occupied place", async () => {
    const data = await page.waitForSelector(".page-nav > a:nth-child(1)");
    await data.click();
    const time = await page.waitForSelector(
      "section > div:nth-child(3) > ul > li"
    );
    await time.click();
    const chair = await page.waitForSelector(
      ".buying-scheme__wrapper > div:nth-child(2) > span:nth-child(2)"
    );
    await chair.click();
    const booking = await page.waitForSelector("button.acceptin-button");
    await booking.click();
    const element = await page.waitForSelector("section");
    const value = await element.evaluate((el) => el.textContent, element);
    expect(value).toEqual(expect.not.stringContaining("Электронный билет"));
  });
});
