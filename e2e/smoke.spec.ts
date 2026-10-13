import { expect, test } from "@playwright/test";

test("primary routes render", async ({ page }) => {
  for (const path of ["/", "/about", "/gallery", "/tickets"]) {
    await page.goto(path);
    await expect(page.locator("main")).toBeVisible();
  }
});

test("gallery filters and lightbox are keyboard accessible", async ({ page }) => {
  await page.goto("/gallery");
  await page.getByRole("button", { name: "Mammals" }).click();
  await page.getByRole("button", { name: /Giants of the green/i }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
});
