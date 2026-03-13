import { test, expect } from "@playwright/test";

// Замість 5173 вкажіть порт, на якому запускається ваш Vite (зазвичай це 5173 або 3000)
const APP_URL = "http://127.0.0.1:5500/src";

test.describe("Greenhouse Dashboard E2E", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(APP_URL);
	});

	test("Сценарій 1: Дашборд завантажується та відображає головні елементи", async ({
		page,
	}) => {
		// Перевіряємо, чи є на сторінці правильний заголовок
		await expect(page).toHaveTitle(/Greenhouse/i);

		// Перевіряємо, чи відображається панель з показниками температури
		const tempDisplay = page.locator("#temperature-display");
		await expect(tempDisplay).toBeVisible();
	});

	test("Сценарій 2: Користувач може увімкнути водяний насос", async ({
		page,
	}) => {
		const pumpButton = page.locator("#pump-btn");

		// Переконуємось, що кнопка є на екрані
		await expect(pumpButton).toBeVisible();

		// Імітуємо клік користувача
		await pumpButton.click();

		// Перевіряємо реакцію інтерфейсу після кліку [cite: 261]
		// Наприклад, перевіряємо, що кнопка отримала клас "active" або змінився її текст
		await expect(pumpButton).toHaveClass(/active/);
	});
});
