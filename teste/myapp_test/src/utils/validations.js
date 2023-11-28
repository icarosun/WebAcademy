/**
 * Extracts the first name from a full name string.
 *
 * @param {string} fullName - The full user name separated by blank spaces.
 * @returns {string} - The first name extracted from the full name, or the name itself if no blank space is found.
 * @returns {null} - When the full name is only blank space
 */
function firstName(fullName) {
  if (fullName == null || fullName == undefined) return null;

  const fullNameTrim = fullName.trim();
  
  if (fullNameTrim.length <= 0) return null;
  
  const blankSpace = fullNameTrim.indexOf(' ');

  if (blankSpace === -1) return fullName;
  else return fullNameTrim.slice(0, blankSpace);
}

/**
 * Verifies the availability of a product in stock based on its type and desired quantity.
 *
 * @param {string} productType - The type of the product to check for availability.
 * @param {number} qty - The desired quantity of the product to check.
 * @returns {boolean} - Returns true if the desired quantity of the specified product type is available in stock,
 *                      otherwise returns false.
 */
function verifyStockAvailability(productType, qty) {
  const stock = {
    laptop: 10,
    smartphone: 20,
    headphone: 5,
    tablet: 15,
    book: 0,
  };
 
  if (!(productType in stock) || qty < 1) return false;

  const availableStock = stock[productType];
  
  return availableStock >= qty;
}

/**
 * Calculates the total price of an array of products in an e-commerce application.
 *
 * @param {Array} products - An array of product objects, each containing 'price' and 'quantity' properties.
 * @returns {number} - The total price obtained by multiplying the price of each product by its quantity
 *                    and summing up the individual product prices.
 *
 * Example of products array:
 *   [
 *     { name: 'Product 1', price: 10, quantity: 2 },
 *     { name: 'Product 2', price: 15, quantity: 2 },
 *     { name: 'Product 3', price: 20, quantity: 1 }
 *   ]
 */
function calculateTotalPrice(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    if ("price" in products[i] && "quantity" in products[i]) {
      if(products[i].price > -1 && products[i].quantity > 0) {
        total += products[i].price * products[i].quantity;
      }
    }
  }
  return total;
}

module.exports = { firstName, verifyStockAvailability, calculateTotalPrice };
