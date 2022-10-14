module.exports = {
  clickElement: async function (page, selector) {
    await page.waitForSelector(selector);
    await page.click(selector);
  },

  assretNoElementValue: async function (page, selector, text) {
    const element = await page.waitForSelector(selector);
    const value = await element.evaluate((el) => el.textContent, element);
    expect(value).toEqual(expect.not.stringContaining(text));
  },
  assretElementValue: async function (page, selector, text) {
    const element = await page.waitForSelector(selector);
    const value = await element.evaluate((el) => el.textContent, element);
    expect(value).toEqual(text);
  },

  useCucumber: async function (string) {
    await this.page.waitForSelector(string);
    await this.page.click(string);
  },
};
