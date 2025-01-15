import { test } from "../TestBase";

test.describe("Applitools Test Suite", () => {
    test("correct login", async ({ appliTools, eyes }) => {
        await appliTools.goHome();
        await eyes.check("Login page", { fully: true, matchLevel: "Strict" });
        await appliTools.loginSuccess();
        await eyes.check("Logged in - Dashboard", { matchLevel: "Layout" });
    });
});