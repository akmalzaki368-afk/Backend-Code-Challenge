# 🚀 Backend Developer Challenge

Welcome! This project is a simple backend service built with **TypeScript** and **Express.js** that demonstrates CRUD operations, database integration, and basic system design thinking.

> 💡 Built with clarity, scalability, and a touch of fun.

---

# 📦 Tech Stack

* **Node.js**
* **Express.js**
* **TypeScript**
* **PostgreSQL**

---

# 🧩 Features

* ✅ Create a resource
* ✅ Retrieve all resources (with filtering)
* ✅ Retrieve single resource
* ✅ Update resource
* ✅ Delete resource
* ✅ Clean architecture (Controller → Route → DB)

---

# 📁 Project Structure

```
src/
 ├── controllers/   # Business logic
 ├── routes/        # API routes
 ├── db/            # Database connection
 ├── app.ts         # Express app setup
 └── server.ts      # Entry point
```

---

# ⚙️ Setup Instructions

## 1. Clone Repository

```bash
git clone <your-repo-url>
cd backend-challenge
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Setup Environment Variables

Create `.env` file:

```env
PORT=3000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=challenge_db
DB_PASSWORD=password
DB_PORT=5432
```

---

## 4. Setup Database

Run this SQL:

```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT
);
```

---

## ▶️ Run Application

```bash
npm run dev
```

Server will run on:

```
http://localhost:3000
```

---

# 🧪 How to Test the API

You can use:

* Postman
* curl
* Thunder Client (VS Code)

---

## 🔹 Create Task

```http
POST /tasks
```

Body:

```json
{
  "title": "Learn Backend",
  "description": "Practice Express.js"
}
```

---

## 🔹 Get All Tasks

```http
GET /tasks
```

Optional filter:

```http
GET /tasks?title=Learn
```

---

## 🔹 Get Single Task

```http
GET /tasks/1
```

---

## 🔹 Update Task

```http
PUT /tasks/1
```

```json
{
  "title": "Updated Title",
  "description": "Updated Description"
}
```

---

## 🔹 Delete Task

```http
DELETE /tasks/1
```

---

# 🎯 Design Notes

* Uses RESTful API design
* Separation of concerns (routes, controllers, db)
* Scalable structure for real-world backend systems

---

# 🧠 Fun Note

This project may look simple…

…but it secretly represents:

* API design 🧩
* Data persistence 🗄️
* System thinking 🧠

Basically, a baby version of a real production backend 😄

---

# 🚀 Future Improvements

* Authentication (JWT)
* Input validation
* Logging system
* Docker support
* Pagination

---

# 📬 Author

Backend Developer Candidate 🚀
Ready to build scalable systems and solve real-world problems.
