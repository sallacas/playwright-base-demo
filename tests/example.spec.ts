import { test, expect } from "@applitools/eyes-playwright/fixture";

test.describe("Playwright basic example", () => {
  test("Pnpm website", async ({ page, eyes }) => {
    await page.goto("https://pnpm.io/");

    /* Full page visual check */
    await eyes.check("Home page");

    await page.getByText("Get Started").click();

    await eyes.check("Get Started page");

    await eyes.check("Search box in light theme", {
      region: page.getByRole("button", { name: "Search (Ctrl+K)" }),
    });

    await page.getByLabel("Switch between dark and light").click();

    await eyes.check("Search box in light theme", {
      region: page.getByRole("button", { name: "Search (Ctrl+K)" }),
    });

    expect(true).toBeTruthy();
  });
});
test.describe("Front Rules website", () => {
  test("Check responsive design", async ({ page, eyes }) => {
    await page.goto(
      process.env.FRONT_RULES_URL || "https://front-rules.netlify.app/"
    );

    await eyes.check("Home page");

    await page.setViewportSize({ width: 375, height: 667 });

    await eyes.check("Home page on mobile");
  });
});

const LOGIN_URL = "https://demo.applitools.com/";
// const LOGIN_URL = "https://demo.applitools.com/index_v2.html";
test.describe("Applitools Test Suite", () => {
  test("Test todomvc", async ({ page, eyes }) => {
    const ITEMS = ["Learn JavaScript", "Learn TypeScript", "Learn Playwright"];
    await page.goto("/todomvc/");

    await eyes.check("Home page");
    const newTodo = page.getByPlaceholder("What needs to be done?");
    for (const item of ITEMS) {
      await newTodo.fill(item);
      await newTodo.press("Enter");
    }
    await eyes.check("Todo items");
    expect(true).toBeTruthy();
  });
  test("Test login form changes", async ({ page, eyes }) => {
    await page.goto(LOGIN_URL);

    await eyes.check("Login page", { fully: true, matchLevel: "Strict" });

    await page.locator("#username").fill("admin");
    await page.locator("#password").fill("admin");

    await page.locator("#log-in").click();

    await eyes.check("Logged in - Dashboard", { matchLevel: "Layout" });
    // expect(page).toHaveScreenshot();

    expect(true).toBeTruthy();
  });
});
