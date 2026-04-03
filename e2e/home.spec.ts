import { test, expect } from "@playwright/test"

test("la page d'accueil affiche les sections principales", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { name: /le film du jour/i })).toBeVisible()
  await expect(page.getByRole("heading", { name: "Films", exact: true })).toBeVisible()
  await expect(page.getByRole("heading", { name: "Acteurs - actrices", exact: true })).toBeVisible()
})

test("navigation vers la liste des films", async ({ page }) => {
  await page.goto("/")
  await page.getByText("140 films classiques").click()
  await expect(page).toHaveURL("/movies")
  await expect(page.getByRole("heading", { name: "Films", exact: true })).toBeVisible()
})

test("navigation vers la liste des acteurs", async ({ page }) => {
  await page.goto("/")
  await page.getByText("71 acteurs et actrices de légende").click()
  await expect(page).toHaveURL("/actors")
  await expect(page.getByRole("heading", { name: "Acteurs - actrices", exact: true })).toBeVisible()
})
