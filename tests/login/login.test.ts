import { test, expect } from '../../test-logic/fixtures/login.fixture'
import { existingUsers } from '../../test-logic/setup/localStorage.setup'

test.describe('login form tests', () => {
  const existingUser = existingUsers[0];

  test('logging in works with existing account', async ({ loginPage }) => {
    await loginPage.goToLoginPage();

    await loginPage.typeEmail(existingUser.email);
    await loginPage.typePassword(existingUser.password);
    await loginPage.clickLoginButton();

    await expect(await loginPage.getLogoutText()).toBeVisible();
  })
})
