import { test as base } from '@playwright/test';
import { SignupPage } from "../pages/signup.page";

type SignupFixture = {
    signupPage: SignupPage
}

export const test = base.extend<SignupFixture>({
    signupPage: async({ page }, use) => {
        await(use(new SignupPage(page)));
    }
});
export { expect } from '@playwright/test';