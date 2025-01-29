# User Authentication API (Node.js + SQLite + JWT)

This is a **Node.js** authentication API using **SQLite** as the database, **Sequelize** as the ORM, **Express** as the server, **JWT** for authentication, and **bcrypt** for password hashing.

---

## 🚀 Features
- **User Registration** with secure password hashing (**bcrypt**)
- **User Login** with JWT authentication
- **Fetch All Users** (excluding passwords)
- **Protected Routes** requiring authentication
- **Uses SQLite** as a lightweight database
- **Sequelize ORM** for database interactions

---

## 🛠️ Technologies Used

| Technology       | Purpose |
|-----------------|---------|
| **Node.js**     | Backend runtime |
| **Express.js**  | Web framework |
| **SQLite**      | Lightweight database |
| **Sequelize**   | ORM for database management |
| **JWT**         | Authentication & authorization |
| **bcrypt.js**   | Password hashing & security |

---

## 📦 Installation

### **1. Clone the Repository**
```sh
git clone https://github.com/ifycodeNg/testapp
cd testapp

npm install

API Endpoints

1️⃣ Register a New User
Endpoint: POST /register
Request Body:
{
  "email": "test@example.com",
  "password": "password123"
}

2️⃣ User Login (Get JWT Token)
Endpoint: POST /login
Request Body
{
  "email": "test@example.com",
  "password": "password123"
}


3️⃣ Fetch All Users
Endpoint: GET /users
Headers:
Authorization: Bearer <your_jwt_token>
