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

Copy `.env.example` to `.env` in the root directory, then set `MONGO_URI` to
your MongoDB connection string. The example uses a local MongoDB instance:

```env
MONGO_URI=mongodb://127.0.0.1:27017/book-store
PORT=5000
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

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
POST /book/addBook
Content-Type: multipart/form-data
```

Send these fields as `multipart/form-data` (for example, using Postman form-data):

| Key | Type | Example |
|---|---|---|
| `title` | Text | The Alchemist |
| `author` | Text | Paulo Coelho |
| `ISBN` | Text | 9780061122415 |
| `description` | Text | A novel about following your dreams. |
| `price` | Text | 299 |
| `bookImage` | File | A JPEG or PNG image (maximum 5 MB) |

Use the `bookImage` field name exactly; the API requires an image upload when creating a book.

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
