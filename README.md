# WB Shop

### Introduction

WB Shop is a project that simulates an online store responsible for displaying and selling products from a catalog. The primary aim of this project was to enhance front-end development skills by creating a seamless shopping experience. From product display to order completion, every aspect was designed to provide users with an engaging and efficient buying process.

### Technologies

This project was developed with Next.js and uses Shadcn/UI as the component library, along with Tailwind CSS for styling. Zustand was employed for state management, providing efficient handling of the shopping cart. The displayed products are fetched through an integration with the Stripe API, which includes a product catalog feature. Additionally, the integration with Stripe was also used to generate test payment links.

### Features

- Product Catalog Display: Integrates with the Stripe API to fetch and display the product catalog.
- Product Detail Page:
  - Displays comprehensive product information.
  - Allows users to purchase, increase, or decrease the product quantity.
  - Features a carousel of related products, enabling users to click on an item to view its details or purchase it directly.
- Shopping Cart:
  - Shows an empty cart message when no items are present.
  - Lists products in the cart, allowing users to adjust quantities or remove items.
  - If at least one product is in the cart, displays a "Checkout" button that redirects users to a Stripe payment link.
- Order Completion: After completing payment, users are redirected to a success page that displays the details of the purchased items.

### How to Run Locally

*First of all, you need to create a test account on Stripe. Afterwards, you should add products in the "Products" section of your Stripe dashboard. Finally, update the .env file in your project with the secret key from your Stripe account to ensure proper API integration.*

1) Clone this repository;
2) Open the terminal inside the cloned repository folder and install the project dependencies;
```
npm i
```
3) Create a .env.local file in the root directory of your project and configure your environment variables;
```
# App
NEXT_URL=YOUR_APP_URL

# Stripe
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
```
4) Run the development server.