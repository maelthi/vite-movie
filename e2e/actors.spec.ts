import { test, expect } from "@playwright/test"

test("la liste des acteurs s'affiche", async ({ page }) => {
  await page.goto("/actors")
  await expect(
    page.getByRole("heading", { name: "Acteurs - actrices", exact: true }),
  ).toBeVisible()
  const items = page.locator(".actors__item")
  await expect(items.first()).toBeVisible()
})

test("navigation vers le détail d'un acteur", async ({ page }) => {
  await page.goto("/actors")
  await page.locator(".actors__item a").first().click()
  await expect(page).toHaveURL(/\/actors\/.+/)
  await expect(page.locator(".actor__title")).toBeVisible()
})

test("retour arrière depuis le détail d'un acteur", async ({ page }) => {
  await page.goto("/actors")
  await page.locator(".actors__item a").first().click()
  await page.locator(".actor__back-icon").click()
  await expect(page).toHaveURL("/actors")
})
