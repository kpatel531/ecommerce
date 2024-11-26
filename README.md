# Full Stack E-commerce Application using MERN Stack
This project is a full-stack e-commerce platform built using the MERN stack **(MongoDB, Express.js, React.js, and Node.js)**. The application supports **cash on delivery** and **Stripe payment gateway** options, and includes an admin panel with enhanced data security features.

![Alt text](Thumnails.png?raw=true "Title")

## Features

### User Features
- **Product Listings:** Browse products with search and filtering options.
- **User Authentication:** Secure login and signup using JWT.
- **Shopping Cart:** Add/remove items and adjust quantities.
- **Checkout:** Seamless checkout process with cash-on-delivery and Stripe payment gateway integration.
- **Order History:** View previous orders and payment details.
- **Responsive Design:** Optimized for desktops, tablets, and mobile devices.

### Admin Features
- **Product Management:** Add, edit, and delete products.
- **Order Management:** View and update order statuses (pending, shipped, delivered).
- **User Management:** Manage customer accounts.
- **Secure Admin Panel:** Role-based access with enhanced security for sensitive data.
- **Sales Analytics:** Dashboard for tracking revenue, orders, and customer trends.

### Admin Features
- **Data Encryption:** Sensitive information is encrypted (e.g., passwords via bcrypt).
- **Environment Variables:** Secure storage of API keys and database credentials.
- **Input Validation:** Prevent SQL injection and cross-site scripting (XSS) attacks.
- **Secure Payments:** Stripe is implemented with tokenization for payment data.

## Tech Stack
### Frontend
- **React.js:** Component-based UI design.
- **Redux:** State management.
- **Axios:** API communication.
- **Material-UI/Bootstrap:** UI components and styling.

### Backend
- **Node.js:** Server-side runtime.
- **Express.js:** Backend framework.
- **MongoDB:** NoSQL database for storing data.

### Tools & Integrations
- **Stripe API:** Online payment processing.
- **JWT:** Secure authentication.
- **Mongoose:** MongoDB object modeling.
- **dotenv:** Environment variable management.

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo-name/infinityjewellery.git
cd infinityjewellery
```

### 2. Install Dependencies
Navigate to both the frontend and backend folders and install dependencies:

```bash
# Backend
cd server
npm install

# Frontend
cd client
npm install
```

### 3. Configure Environment Variables
Create a ```.env``` file in the ```root``` folder and add:

```bash
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
```

### 4. Run the Application
Open two terminals and run:

```bash
# Backend
cd server
npm run dev

# Frontend
cd client
npm start
```

## Future Enhancements
- Add **product reviews** and ratings.
- Integrate **email notifications** for orders.
- Implement **real-time inventory tracking**.
- Implement admin dashboard for **sales analytics**.
- Integrate online **stripe payment** for checkout.
- Implement **customers address** for eCommerce journey.


# Demo 
![Alt text](Demo%201.gif?raw=true "demo1")
![Alt text](Demo%202.gif?raw=true "demo2")


## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any new features or bug fixes.

**Happy Coding!** 🎉