import { test, expect } from '../../test-logic/fixtures/signup.fixture'

test.describe('signup form tests', () => {

  const newUser = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'firstname.lastname@strawberry.qa',
    password: 'correcthorsebatterystaple'
  };

  test('signing up works', async ({ signupPage, loginPage }) => {
    // Sign up
    await signupPage.goToSignupPage();

    await signupPage.typeFirstName(newUser.firstName);
    await signupPage.typeLastName(newUser.lastName);
    await signupPage.typeEmail(newUser.email);
    await signupPage.typePassword(newUser.password);
    await signupPage.clickSubmitButton();

    await expect(await signupPage.getWelcomeText(newUser.firstName, newUser.lastName)).toBeVisible();

    // Log in with new user
    await loginPage.goToLoginPage();

    await loginPage.typeEmail(newUser.email);
    await loginPage.typePassword(newUser.password);
    await loginPage.clickLoginButton();

    await expect(await loginPage.getLogoutText()).toBeVisible();
  })
})