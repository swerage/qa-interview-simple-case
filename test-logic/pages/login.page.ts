import type { Page, Locator } from '@playwright/test'

export class LoginPage {
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    
    constructor(public readonly page: Page) {
        this.emailInput = this.page.locator('#email');
        this.passwordInput = this.page.locator('#password');
        this.loginButton = this.page.locator('[data-testid="login-button"]');
    }

    async goToLoginPage() {
        await this.page.goto('localhost:8080/login');
    }

    async typeEmail(text: string) {
        await this.emailInput.fill(text);
    }

    async typePassword(text: string) {
        await this.passwordInput.fill(text);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getLogoutText() {
        return this.page.getByText('Log out');
    }
}