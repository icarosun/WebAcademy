const { firstName, verifyStockAvailability, calculateTotalPrice } = require("../validations.js");

describe("firstName()", () => {
  it("should return the first name when the full name is given", () => {
    const fullName = "John Doe Etc";
    const result = firstName(fullName);
    expect(result).toBe("John");
  });

  it("should return the same name when no blank space is found", () => {
    const name = "Alice";
    const result = firstName(name);
    expect(result).toBe(name);
  });

  it("should return the first name correctly when theres blank space in the start", () => {
    const name = " Alice Test";
    const result = firstName(name);
    expect(result).toBe("Alice");
  });

  it("should return the first name correctly when theres blank space in the end", () => {
    const name = "Alice Test ";
    const result = firstName(name);
    expect(result).toBe("Alice");
  });

  it("should return null when the full name is only blank space", () => {
    const name = "               "; 
    const result = firstName(name);
    expect(result).toBeNull();
  });

  it("should return null when the full name is empty", () => {
    const result = firstName();
    expect(result).toBeNull();
  });

  it("should return null when the full name is undefined", () => {
    const name = undefined;
    const result = firstName(name);
    expect(result).toBeNull();
  });

  it("should return null when the full name is null", () => {
    const name = null;
    const result = firstName(name);
    expect(result).toBeNull();
  });

});

describe("verifyStockAvailability()", () => {
  it("should return true when the product exist in stock and the quantity is less than or equal to that stored in stock", () => {
    const product = "laptop";
    const qty = 10;
    const result = verifyStockAvailability(product, qty);

    expect(result).toBe(true);
  });

  it("should return false when the product exist but the quantity is more then stored in stock", () => {
    const product = "laptop";
    const qty = 100;
    const result = verifyStockAvailability(product, qty);

    expect(result).toBe(false);
  }); 

  it("should return false when the product not exist", () => {
    const product = "banana";
    const qty = 1;
    const result = verifyStockAvailability(product, qty);

    expect(result).toBe(false);
  });

  it("should return false when the quantity is less then 1", () => {
    const product = "laptop";
    const qty = -1;
    const result = verifyStockAvailability(product, qty);

    expect(result).toBe(false);
  });
});

describe("calculateTotalPrice()", () => {
  it("should return the total price when a array of products with product, price and quantity is given", () => {
    const products = [
      { name: 'Product 1', price: 10, quantity: 2 },
      { name: 'Product 2', price: 15, quantity: 2 },
      { name: 'Product 3', price: 20, quantity: 1 }
    ];

    const result = calculateTotalPrice(products);

    expect(result).toBe(70);
  });

  it("the total price retuned should ignore the product in calculate when the price is less zero", () => {
    const products = [
      { name: 'Product 1', price: -1, quantity: 2 },
      { name: 'Product 2', price: 15, quantity: 2 },
      { name: 'Product 3', price: 20, quantity: 1 }
    ];

    const result = calculateTotalPrice(products);

    expect(result).toBe(50);
  });
  
  it("the total price retuned should ignore the product in calculate when the quantity is less zero", () => {
    const products = [
      { name: 'Product 1', price: 10, quantity: -1 },
      { name: 'Product 2', price: 15, quantity: 2 },
      { name: 'Product 3', price: 20, quantity: 1 }
    ];

    const result = calculateTotalPrice(products);

    expect(result).toBe(50);
  });

  it("the total price retuned should ignore the product in calculate when the object product is without price", () => {
    const products = [
      { name: 'Product 1', price: 10, quantity: 2 },
      { name: 'Product 2', price: 15, quantity: 2 },
      { name: 'Product 3', quantity: 1 }
    ];

    const result = calculateTotalPrice(products);

    expect(result).toBe(50);
  });

  it("the total price retuned should ignore the product in calculate when the object product is without quantity", () => {
    const products = [
      { name: 'Product 1', price: 7, quantity: 2 },
      { name: 'Product 2', price: 15 },
      { name: 'Product 3', price: 20, quantity: 1 }
    ];

    const result = calculateTotalPrice(products);

    expect(result).toBe(34);
  });
});
