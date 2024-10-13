class ProductPage {
    constructor(page) {
        this.page = page;
        this.productName = page.locator('h2.name');
        this.productPrice = page.locator('h3.price-container');
        this.productDescription = page.locator('div.description p');
        this.addToCartButton = page.locator('a', { hasText: 'Add to cart' });
        this.cartLink = page.locator('a#cartur');

    }

    async getProductName() {
        try {
            return await this.productName.innerText();
        } catch (error) {
            console.error('Error retrieving product name:', error);
            throw new Error('Product name retrieval failed');
        }
    }

    async getProductPrice() {
        try {
            return await this.productPrice.innerText();
        } catch (error) {
            console.error('Error retrieving product price:', error);
            throw new Error('Product price retrieval failed');
        }
    }

    async getProductDescription() {
        try {
            return await this.productDescription.innerText();
        } catch (error) {
            console.error('Error retrieving product description:', error);
            throw new Error('Product description retrieval failed');
        }
    }

    async clickAddToCart() {
        try {
            // Enable Dialog Window Handlder
            this.page.on('dialog', async dialog => {
                await dialog.accept()
            })

            await this.addToCartButton.click()
        } catch (error) {
            console.error('Error clicking add to cart button:', error);
            throw new Error('Add to cart action failed');
        }
    }

    async goToCart() {
        try {
            await this.cartLink.waitFor({ state: 'visible' }); // Wait until the element is visible
            await this.cartLink.click();
        } catch (error) {
            console.error('Error clicking on cart link:', error);
            throw new Error('Failed to navigate to cart');
        }
    }

    async assertProductDetails(expectedName, expectedPrice, expectedDescription) {
        try {
            const name = await this.getProductName();
            const price = await this.getProductPrice();
            const description = await this.getProductDescription();

            if (name !== expectedName) {
                throw new Error(`Product name mismatch: expected "${expectedName}", got "${name}"`);
            }
            if (price !== expectedPrice) {
                throw new Error(`Product price mismatch: expected "${expectedPrice}", got "${price}"`);
            }
            if (description !== expectedDescription) {
                throw new Error(`Product description mismatch: expected "${expectedDescription}", got "${description}"`);
            }
        } catch (error) {
            console.error('Error during assertions:', error);
            throw new Error('Product detail assertion failed');
        }
    }
}

module.exports = ProductPage