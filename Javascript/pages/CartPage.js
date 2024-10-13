class CartPage {
    constructor(page) {
        this.page = page;
        this.cartProducts = page.locator('tbody#tbodyid tr.success');
        this.placeOrderButton = page.locator('button', { hasText: 'Place Order' }); // Adjusted to match typical usage
    }

    async deleteProduct(productName) {
        const productRowLocator = this.page.locator(`tbody#tbodyid tr.success:has(td:has-text("${productName}"))`);

        try {
            const productCount = await productRowLocator.count();
            if (productCount === 0) {
                throw new Error(`Product "${productName}" not found for deletion`);
            }

            // Click the delete link in the found product row
            await productRowLocator.locator('td:nth-child(4) a').click();
            console.log(`Product "${productName}" has been deleted successfully.`);
        } catch (error) {
            console.error('Error deleting product:', error);
            throw new Error('Product deletion failed');
        }
    }

    async placeOrder() {
        try {
            await this.placeOrderButton.click();
            // Here you might want to handle the order confirmation dialog or page
            console.log('Order placed successfully.');
        } catch (error) {
            console.error('Error placing order:', error);
            throw new Error('Order placement failed');
        }
    }

    async verifyProductInCart(productName) {
        try {
            // Wait for the table to load
            await this.page.waitForSelector('tbody#tbodyid');

            // Get all product rows using the provided cartProducts reference
            const products = await this.cartProducts.elementHandles(); // Get all matching elements
            console.log(`Products: ${products.length}`); // Log the number of products

            // Fetch titles of products
            const titles = await Promise.all(products.map(async product => {
                const titleHandle = await product.$('td:nth-child(2)'); // Select the title cell
                return titleHandle ? await titleHandle.innerText() : null; // Get inner text
            }));

            // Filter out null values
            const validTitles = titles.filter(title => title !== null);

            // Check if the productName exists in the valid titles
            if (validTitles.includes(productName)) {
                console.log(`Product "${productName}" is in the cart.`);
                return productName; // Return the product name if found
            } else {
                throw new Error(`Product "${productName}" not found in the cart`);
            }
        } catch (error) {
            console.error('Error verifying product in cart:', error);
            throw new Error('Product verification failed');
        }
    }



}

module.exports = CartPage