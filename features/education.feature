Feature: Edication
Scenario: Should sucsess education

Before(async() =>{
    constbrowser=await puppeteer.launch({ headless:false, slowMo:50 });
    constpage=await browser.newPage();
    this.browser= browser;
    this.page= page;
});

    Given ("user is on page", async (string) => {
    // to do;
    return "pending"
});
    When ("one ticket booking today", async (string) => {
    // to do;
    return "pending"
});
    Then ("ticket received", async (string) => {
    // to do;
    return "pending"
}) 