import { test, expect } from "@playwright/test"

test("la liste des films s'affiche", async ({ page }) => {
  await page.goto("/movies")
  await expect(page.getByRole("heading", { name: "Films", exact: true })).toBeVisible()
  const items = page.locator(".movies__item")
  await expect(items.first()).toBeVisible()
})

test("navigation vers le détail d'un film", async ({ page }) => {
  await page.goto("/movies")
  await page.locator(".movies__item a").first().click()
  await expect(page).toHaveURL(/\/movies\/\d+/)
  await expect(page.locator(".movie__title")).toBeVisible()
})

test("retour arrière depuis le détail d'un film", async ({ page }) => {
  await page.goto("/movies")
  await page.locator(".movies__item a").first().click()
  await page.locator(".movie__back-icon").click()
  await expect(page).toHaveURL("/movies")
})
