import { expect, type Expect, type Page } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

const CORRECT_EMAIL = process.env.CORRECT_EMAIL;
const CORRECT_PASSWORD = process.env.CORRECT_PASSWORD;

export class SuperPage {
  page: Page;
  expect: Expect;
  username: string | undefined;
  password: string | undefined;
  constructor(page: Page) {
    this.page = page;
    this.expect = expect;
    this.username = CORRECT_EMAIL;
    this.password = CORRECT_PASSWORD;
  }
  getCredentials() {
    if (!this.username || !this.password) {
      throw new Error("Credentials are not set in Env Variables");
    }
    return { username: this.username, password: this.password };
  }
  async goto(url: string) {
    await this.page.goto(url);
  }
}
