import { test, expect } from '../../test-logic/fixtures/signup.fixture'

test.describe('signup form tests', () => {
  test('signing up works', async ({ signupPage }) => {
    await signupPage.goToSignupPage();

    await signupPage.typeFirstName("First Name");
    await signupPage.typeLastName("Last Name");
    await signupPage.typeEmail("firstname.lastname@strawberry.qa");
    await signupPage.typePassword("correcthorsebatterystaple");

    await signupPage.clickSubmitButton();

    await expect(await signupPage.getWelcomeText("First Name", "Last Name")).toBeVisible();
  })
})