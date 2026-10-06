# 📚 Book Store API



A simple and scalable **Book Store REST API** built with **Node.js, Express.js, and MongoDB**.

This project demonstrates how to build a backend API using a structured architecture with routes, controllers, models, middleware, database configuration, and error handling.

---

## 🚀 Features

- 📚 Book management API
- ➕ Add new books
- 📖 Get book data
- ✏️ Update book information
- 🗑️ Delete books
- 🗄️ MongoDB database integration
- ⚡ Express.js REST API
- 🧩 MVC-style project structure
- 🛡️ Custom error-handling middleware
- 📤 File upload support using Multer
- 🔐 Environment variable support with dotenv
- 🔄 Nodemon development setup

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| Multer | File upload handling |
| Dotenv | Environment variables |
| Nodemon | Development server |

---

## 📁 Project Structure

```text
book-store-api-in-nodejs/
│
├── config/
│   └── db.js
│
├── controller/
│   └── ...
│
├── middleware/
│   └── httpError.js
│
├── model/
│   └── ...
│
├── routes/
│   └── book.routes.js
│
├── .env
├── package.json
├── package-lock.json
└── server.js
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/dholkiyaruchit-lab/book-store-api-in-nodejs.git
```

### 2. Navigate to the project

```bash
cd book-store-api-in-nodejs
```

### 3. Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

> ⚠️ Never commit your `.env` file or database credentials to GitHub.

---

## ▶️ Run the Project

### Development mode

```bash
npm run dev
```

The server runs on:

```text
http://localhost:5000
```

### API Base URL

```text
http://localhost:5000/book
```

---

## 📡 API Endpoints

### 📚 Book API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/book` | Get books |
| GET | `/book/:id` | Get a single book |
| POST | `/book` | Add a new book |
| PUT | `/book/:id` | Update a book |
| DELETE | `/book/:id` | Delete a book |

> Endpoint details may depend on the current implementation of the book routes.

---

## 📝 Example Request

### Create a Book

```http
POST /book
Content-Type: application/json
```

Example body:

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "price": 299,
  "category": "Fiction"
}
```

---

## 📦 Example Response

```json
{
  "message": "Book created successfully",
  "book": {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 299,
    "category": "Fiction"
  }
}
```


---

## 🏗️ Architecture

The project follows a clean backend structure:

```text
Client
   │
   ▼
Express Routes
   │
   ▼
Controllers
   │
   ▼
Mongoose Models
   │
   ▼
MongoDB
```

Error handling is managed through custom middleware so that API errors can be returned in a consistent format.

---

## 🎯 Learning Objectives

This project was created to practice:

- Building REST APIs with Express.js
- Connecting Node.js applications with MongoDB
- Working with Mongoose
- Creating routes and controllers
- Handling HTTP errors
- Managing environment variables
- Uploading files with Multer
- Structuring a Node.js backend project

---

## 🔮 Future Improvements

Some features that can be added in the future:

- 🔐 User authentication with JWT
- 👤 User registration and login
- 🛒 Shopping cart
- ❤️ Wishlist
- ⭐ Book reviews and ratings
- 🔎 Search and filtering
- 📄 Pagination
- 💳 Payment integration
- 👨‍💼 Admin dashboard
- 📊 Sales analytics
- 🧪 Automated API testing
- 📖 Swagger/OpenAPI documentation

---

## 👨‍💻 Author

**Ruchit Dholkiya**

GitHub:  
https://github.com/dholkiyaruchit-lab

---

## 📄 License

This project is available for educational and development purposes.
