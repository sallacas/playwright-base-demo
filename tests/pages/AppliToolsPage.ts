import type { Locator, Page } from '@playwright/test';
import { SuperPage } from "./SuperPage";

export class ApplitoolsPage extends SuperPage {
    usernameInput: Locator;
    passwordInput: Locator;
    submitButton: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = this.page.locator('#username');
        this.passwordInput = this.page.locator('#password');
        this.submitButton = this.page.locator('#log-in');
    }
    async goHome() {
        await this.page.goto('https://demo.applitools.com/');
    }
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
    async loginSuccess() {
        const { username, password } = this.getCredentials();
        await this.login(username, password);
        await this.expect(this.page.url()).toContain('/app.html');
    }
}