# Full Stack Food Delivery App

This project is a full-stack application designed to replicate the core functionalities of the Zomato app. It includes features such as restaurant listings, user reviews, and filter functionalities. The project also incorporates an admin panel, backend server, user authentication, shopping cart, and payment processing.

## Features

- **Frontend Website**: A responsive and user-friendly interface to browse restaurants, read reviews, and filter search results.
- **Admin Panel**: Tools for administrators to manage restaurant listings, orders, and user accounts.
- **Backend Server**: A robust server to handle data storage, user authentication, and order processing.
- **User Authentication**: Secure system for account creation, login, and user sessions.
- **Shopping Cart**: Functionality for users to add food items to their cart and place orders.
- **Payment Integration**: Integrated with Stripe for secure online payments.
- **Order Status Updates**: Real-time updates on order status from preparation to delivery.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Stripe API

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/food-delivery-app.git
   cd food-delivery-app
    ```

2. **Install dependencies**
    ```bash
    # For the backend
    cd backend
    npm install

    # For the frontend
    cd ../frontend
    npm install
    ```
3. **Set up environment variables**
    Create a .env file in the backend directory and add your MongoDB URI, Stripe API keys, and any other necessary environment variables.

4. **Start the backend server**
    ```bash
    cd backend
    npm start
    ```
5. **Start the frontend server**
    ```bash
    cd ../frontend
    npm start
    ```

## Installation

Once the servers are running, you can access the application in your web browser at http://localhost:5173. Create an account, browse restaurants, add items to your cart, and place orders with secure online payments. Administrators can log in to access the admin panel for managing the platform/

## Acknowledgements

- Inspired by the Zomato app for the core functionality and design.