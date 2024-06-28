import { test, expect } from '@playwright/test';

const DELAY_BETWEEN_CHECKS = 200;

test('test', async ({ page }) => {
  test.setTimeout(0)
  await page.goto('https://onemillioncheckboxes.com/');
  while (true) {
    const firstUncheckedCheckbox = page.locator('input[type="checkbox"]:not(:checked)').nth(0);
    try {
      await firstUncheckedCheckbox.check();
    } catch (e) {}
    console.log("checked", await firstUncheckedCheckbox.getAttribute('id'));
    await page.waitForTimeout(DELAY_BETWEEN_CHECKS);
  }
});