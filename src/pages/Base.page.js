export class BasePage {
    url = 'https://www.saucedemo.com/';

    /**
     * @param {import("playwright-core").Page} page
     */
    constructor(page) {
        this.page = page;
    }

    // async below added to show the function returns a promise
    async getUrl() {
        return this.page.url();
    }

    async navigate() {
        await this.page.goto(this.url);
    }
}
