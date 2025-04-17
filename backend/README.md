# Sports Streaming API

A simple Sports Streaming backend built with Node.js, Express, and MongoDB.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

## 1. Generating a Secret Key (JWT_SECRET)

Your application needs a secure key for signing JSON Web Tokens (JWT).

### Using Node.js (built-in `crypto`)

```bash
# Run this in your terminal:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

This will output a 64-character hex string, for example:

```
ef3386d0a1f07190434e92c24753edf75f99c2bf464ea5204bc4ca6fde30e346
```

Copy that and use it as your `JWT_SECRET`.

## 2. Setting Up MongoDB Atlas

1. **Create an account** on MongoDB Atlas.
2. **Create a new cluster** (free tier is fine).
3. **Whitelist your IP address** under _Network Access_.
4. **Create a database user** with a username and password.
5. **Get the connection string**:
   - In the Atlas UI, click **Connect** → **Connect your application**.
   - Copy the provided URI, replacing `<username>` and `<password>` with your credentials.

Example:

```text
mongodb+srv://<username>:<password>@cluster0.jaaddee.mongodb.net/myDatabase?retryWrites=true&w=majority
```

## 3. Configuration

1. Create a `.env` file in the project root.
2. Add the following variables:

```env
MONGODB_URI=<your MongoDB connection string>
JWT_SECRET=<your generated hex secret>
PORT=8000
```

Make sure to replace `<your MongoDB connection string>` and `<your generated hex secret>` with your actual values.

## 4. Running the Server Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start in development mode:

   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:8000` (or the port you specified in `.env`).

3. Change the port at any time by updating the `PORT` value in `.env`.

---

That’s it! Your backend is now connected to MongoDB Atlas and secured with a JWT secret. Happy coding!
