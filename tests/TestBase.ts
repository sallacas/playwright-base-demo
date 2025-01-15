import { test as driver } from "@applitools/eyes-playwright/fixture";
import { ApplitoolsPage } from "./pages/AppliToolsPage";

const test = driver.extend<{
  appliTools: ApplitoolsPage;
//   todoMVC: TodoMVCPage;
}>({
  appliTools: async ({ page }, use) => await use(new ApplitoolsPage(page)),
//   todoMVC: async ({ page }, use) => await use(new TodoMVCPage(page)),
});

export { test };