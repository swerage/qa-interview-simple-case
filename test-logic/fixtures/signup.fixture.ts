import { test as base } from '@playwright/test';
import { SignupPage } from "../pages/signup.page";
import { LoginPage } from "../pages/login.page";

type SignupFixtures = {
  signupPage: SignupPage,
  loginPage: LoginPage
}

export const test = base.extend<SignupFixtures>({
  signupPage: async ({ page }, use) => {
    await (use(new SignupPage(page)));
  },
  loginPage: async ({ page }, use) => {
    await (use(new LoginPage(page)));
  }
});
export { expect } from '@playwright/test';