const { test, expect } = require('@playwright/test');
const Homepage = require('../pages/Homepage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');

test('User can log in, select a product, add it to cart, and log out', async ({ page }) => {
    const homepage = new Homepage(page);
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Step 1: Navigate to the homepage
    await homepage.navigate();

    // Step 2: Click on the login button
    await homepage.clickLoginButton()

    // Step 3: Fill in login credentials and log in
    await loginPage.login('pavanol', 'test@123')
    await page.waitForTimeout(2000)

    // Step 4: Select a product
    await homepage.selectProduct('Nexus 6'); // Replace with actual product name

    // Step 5: Add the product to the cart
    const productName = await productPage.getProductName(); // Get the name of the product to verify later
    await productPage.clickAddToCart();
    await page.waitForTimeout(2000)

    // Step 6: Navigate to Cart Page
    await productPage.goToCart()

    // Optional: Verify the product is added to the cart
    const cartProductDetails = await cartPage.verifyProductInCart(productName);
    expect(cartProductDetails).toBe(productName);

    // Step 7: Log out
    await homepage.logout();
});


