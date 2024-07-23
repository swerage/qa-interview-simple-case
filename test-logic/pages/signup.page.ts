import type { Page, Locator } from '@playwright/test'

export class SignupPage {
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly submitButton: Locator;
    
    constructor(public readonly page: Page) {
        this.firstNameInput = this.page.locator('#firstName');
        this.lastNameInput = this.page.locator('#lastName');
        this.emailInput = this.page.locator('#email');
        this.passwordInput = this.page.locator('#password');
        this.submitButton = this.page.locator('[data-testid="signup-button"]');
    }

    async goToSignupPage() {
        await this.page.goto('localhost:8080/signup');
    }

    async typeFirstName(text: string) {
        await this.firstNameInput.fill(text);
    }

    async typeLastName(text: string) {
        await this.lastNameInput.fill(text);
    }
    
    async typeEmail(text: string) {
        await this.emailInput.fill(text);
    }

    async typePassword(text: string) {
        await this.passwordInput.fill(text);
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

    async getWelcomeText(firstName: string, lastName: string) {
        return this.page.getByText(`Welcome ${firstName} ${lastName}`);
    }
}