/*
Filename: ComplexCode.js

This code is a sophisticated and elaborate example that showcases various advanced features of JavaScript. It implements a fictional e-commerce website with user authentication, product listing, shopping cart functionality, and order processing.

Additional features demonstrated include error handling, asynchronous operations using Promises, event handling, local storage, and object-oriented programming concepts.

Note: This code is for illustrative purposes only and may not adhere to best practices for production-ready code.

*/

// Import necessary modules
const readline = require('readline');

// Constants
const PASSWORD = 'password123';
const PRODUCTS = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

// User-related functions
function login() {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Enter password: ', (answer) => {
      if (answer === PASSWORD) {
        rl.close();
        resolve();
      } else {
        rl.close();
        reject(new Error('Incorrect password'));
      }
    });
  });
}

// Product-related functions
function displayProducts() {
  console.log('Available products:');
  PRODUCTS.forEach((product) => {
    console.log(`${product.id}: ${product.name} - $${product.price}`);
  });
}

// Cart-related functions
class CartItem {
  constructor(product) {
    this.product = product;
    this.quantity = 1;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    const existingItem = this.items.find((item) => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push(new CartItem(product));
    }
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
}

// Order-related functions
function processOrder(cart) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orderNumber = Math.floor(Math.random() * 1000) + 1;
      if (orderNumber % 2 === 0) {
        resolve(`Order ${orderNumber} processed successfully!`);
      } else {
        reject(new Error(`Error processing order ${orderNumber}`));
      }
    }, 2000);
  });
}

// Main program
async function main() {
  console.log('Welcome to our e-commerce store!');
  try {
    await login();
    console.log('You are now logged in.');

    displayProducts();

    const cart = new ShoppingCart();

    while (true) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question('Enter product ID to add to cart (or \'done\' to complete order): ', (answer) => {
        if (answer === 'done') {
          rl.close();

          if (cart.items.length === 0) {
            console.log('Your cart is empty. Order cannot be processed.');
            return;
          }

          console.log('Processing order...\n');
          processOrder(cart)
            .then((message) => {
              console.log(message);
              console.log(`Total price: $${cart.getTotalPrice()}`);
            })
            .catch((error) => {
              console.error(`Error processing order: ${error.message}`);
            });

          return;
        }

        const productId = parseInt(answer, 10);
        const product = PRODUCTS.find((p) => p.id === productId);
        if (!product) {
          console.log('Invalid product ID. Try again.');
        } else {
          cart.addItem(product);
          console.log('Product added to cart.');
        }

        rl.close();
      });
    }
  } catch (error) {
    console.error(`Login failed: ${error.message}`);
  }
}

// Start the program
main();