const { Before, After, BeforeAll } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');
const fs = require('fs');


BeforeAll(async function () {

    if (!fs.existsSync("test-results")) {
        fs.mkdirSync("test-results");
    }

    if (!fs.existsSync("screenshots")) {
        fs.mkdirSync("screenshots");
    }
});

Before(async function () {

    const browserName = process.env.Browser || "chromium";
    const headless = process.env.headless !== "false";

    const browserType =
        browserName === "firefox" ? firefox :
        browserName === "webkit" ? webkit :
        chromium;

    this.browser = await browserType.launch({ headless:false });

    this.context = await this.browser.newContext({
        viewport: { width: 1720, height: 850 }
    });

    this.page = await this.context.newPage();

    // // Load test data
    // const usersData = JSON.parse(
    //     fs.readFileSync('./data/users.json', 'utf-8')
    // );

    // this.testData = usersData;
});

After(async function (scenario) {

    if (scenario.result.status === "FAILED") {

        const screenshot = await this.page.screenshot({
            path: `screenshots/${scenario.pickle.name}.png`
        });

        this.attach(screenshot, "image/png");
    }

    await this.context.close();
    await this.browser.close();
});