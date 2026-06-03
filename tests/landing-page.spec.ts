import { test, expect } from '@playwright/test';

test.describe('Landing Page Generator', () => {
  test('should render the landing page with correct content from YAML', async ({ page }) => {
    await page.goto('/');

    // Check Hero Section
    const headline = page.locator('h1');
    await expect(headline).toBeVisible();
    await expect(headline).toContainText('Launch Your Next Big Idea in Seconds');

    // Check CTA
    const cta = page.locator('a:has-text("Get Started Free")');
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute('href', '#closing');

    // Check Social Proof
    await expect(page.locator('text=Trusted by Industry Leaders')).toBeVisible();
    await expect(page.locator('text=Active Users')).toBeVisible();
    await expect(page.locator('text=50,000+')).toBeVisible();

    // Check Benefits
    await expect(page.locator('text=Why Choose Instant Landing Page?')).toBeVisible();
    await expect(page.locator('text=Focus on Benefits, Not Features')).toBeVisible();

    // Check How It Works
    await expect(page.locator('text=How It Works')).toBeVisible();
    await expect(page.locator('text=1. Edit Your YAML')).toBeVisible();

    // Check Closing
    await expect(page.locator('text=Ready to Scale Your Business?')).toBeVisible();
    await expect(page.locator('text=Start Building Now')).toBeVisible();
  });

  test('should render the 404 page for non-existent routes', async ({ page }) => {
    await page.goto('/some-random-page');
    await expect(page.locator('h1')).toContainText('404');
    await expect(page.locator('text=Oops! The page you\'re looking for doesn\'t exist.')).toBeVisible();
  });
});
