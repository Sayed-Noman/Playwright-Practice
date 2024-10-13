const { Module } = require("module");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.locator('button', { hasText: 'Log in' });
        this.closeButton = page.locator('button', { hasText: 'Close' });
    }

    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickCloseButton() {
        await this.closeButton.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}

module.exports = LoginPage