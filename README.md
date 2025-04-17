# Sports Streaming Platform

This repository contains both the **frontend** (Next.js) and **backend** (Node.js + Express + MongoDB) for a simple sports streaming platform prototype.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Environment Configuration](#environment-configuration)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Available Scripts](#available-scripts)
6. [Project Structure](#project-structure)
7. [Security](#security)

---

## Prerequisites

- **Node.js** v14 or newer
- **npm** (or yarn)
- A **MongoDB** instance (e.g. Atlas cluster or local)

---

## Environment Configuration

1. Create a root-level `.env` file:
   ```env
   # Backend
   MONGODB_URI=<your MongoDB connection string>
   JWT_SECRET=<your 64‑char hex string>
   PORT=4000

   # Frontend
   NEXT_PUBLIC_API_URL=http://localhost:4000
   ```
2. Generate a secure JWT secret:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

---

## Backend Setup

1. Navigate to the `backend` folder (if separate) or root if unified:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Seed the database with mock matches (optional):
   ```bash
   npm run seed
   ```
4. Start the development server with hot reload:
   ```bash
   npm run dev
   ```

Your backend will run on **http://localhost:4000** and expose endpoints under `/api`:
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/matches`
- `GET /api/matches/:id`

---

## Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

The Next.js app will start on **http://localhost:3000** by default and will call the backend at `NEXT_PUBLIC_API_URL`.

---

## Available Scripts

### Backend

| Command        | Description                      |
|----------------|----------------------------------|
| `npm run dev`  | Start server with nodemon        |
| `npm run start`| Run production server            |

### Frontend

| Command          | Description                    |
|------------------|--------------------------------|
| `npm run dev`    | Start Next.js development app  |
| `npm run build`  | Build production assets        |
| `npm run start`  | Start Next.js production server|

---

## Project Structure

```
root/
├── backend/                # Express API server
│   ├── src/
│   │   ├── config/db.js    # MongoDB connection
│   │   ├── controllers/    # Business logic
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API route definitions
│   │   ├── middleware/     # Auth middleware
│   │   ├── app.js          # defines middleware and routes
│   │   └── server.js       # Entry point
│   └── package.json
│
└── frontend/               # Next.js application
    ├── src/
    │   ├── app/            # App‑Router pages & layouts
    │   ├── components/     # UI components
    │   ├── hooks/          # React hooks (auth)
    │   ├── lib/            # API helpers, auth helpers
    │   └── public/         # Static assets
    ├── .env.local
    └── package.json
```

---

## Security

- Keep your `.env` files out of version control (see `.gitignore`).
- Use a strong, random `JWT_SECRET`.
- Never commit credentials.

---

Happy coding! Feel free to reach out with issues or pull requests.

