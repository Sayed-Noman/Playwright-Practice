class Homepage {
    constructor(page) {
        this.page = page;
        this.authenticatedUser = page.locator('#nameofuser');
        this.cartLink = page.locator('a', { hasText: 'Cart' });
        this.productList = page.locator('.card-title a');
        this.loginLink = page.locator('a', { hasText: 'Log in' });
        this.logoutLink = page.locator('a', { hasText: 'Log out' });
        this.nextButton = page.locator('button', { hasText: 'Next' });
        this.previousButton = page.locator('button', { hasText: 'Previous' });
    }

    async navigate() {
        try {
            await this.page.goto('https://www.demoblaze.com/');
        } catch (error) {
            console.error('Error navigating to homepage:', error);
            throw new Error('Navigation failed');
        }
    }

    async getAuthenticatedUser() {
        try {
            return await this.authenticatedUser.innerText();
        } catch (error) {
            console.error('Error retrieving authenticated user:', error);
            throw new Error('User retrieval failed');
        }
    }

    async goToCart() {
        try {
            await this.cartLink.click();
        } catch (error) {
            console.error('Error clicking on cart link:', error);
            throw new Error('Failed to navigate to cart');
        }
    }

    async selectProduct(productName) {
        try {
            const products = await this.productList.elementHandles();
            let productFound = false; // Flag to track if the product was found

            for (const product of products) {
                const title = await product.innerText(); // Get the inner text of the product

                if (title.includes(productName)) {
                    await product.click();
                    await this.page.waitForTimeout(3000);
                    productFound = true; // Set flag to true
                    break; // Exit loop since product is found
                }
            }

            // Throw error if product was not found
            if (!productFound) {
                throw new Error(`Product "${productName}" not found`);
            }
        } catch (error) {
            console.error('Error selecting product:', error);
            throw new Error('Product selection failed');
        }
    }

    async logout() {
        try {
            await this.logoutLink.click();
        } catch (error) {
            console.error('Error clicking on logout link:', error);
            throw new Error('Logout failed');
        }
    }

    async clickLoginButton() {
        try {
            await this.loginLink.click();
        } catch (error) {
            console.error('Error clicking on log in link:', error);
            throw new Error('Log In failed');
        }
    }

    async goToNextPage() {
        try {
            await this.nextButton.click();
        } catch (error) {
            console.error('Error clicking next button:', error);
            throw new Error('Navigation to next page failed');
        }
    }

    async goToPreviousPage() {
        try {
            await this.previousButton.click();
        } catch (error) {
            console.error('Error clicking previous button:', error);
            throw new Error('Navigation to previous page failed');
        }
    }
}

module.exports = Homepage