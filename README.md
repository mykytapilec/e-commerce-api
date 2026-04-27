# E-Commerce API

Simple E-Commerce API built with **Node.js**, **Express**, **TypeScript**, **PostgreSQL**, **Prisma**, and **Stripe**.
Supports **authentication**, **product management**, **shopping cart**, and **checkout payments**.

---

## Features

* `/auth/register` — user registration
* `/auth/login` — user login (JWT)
* `/products` — CRUD for products
* `/cart` — shopping cart with quantity logic
* `/payments/checkout` — Stripe checkout session
* JWT authentication for protected routes
* Prisma ORM with PostgreSQL
* Docker-based database setup
* Stripe integration for payments

---

## Setup

1. Clone the repo:

```bash
git clone https://github.com/mykytapilec/e-commerce-api.git
cd e-commerce-api
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env`:

```bash
cp .env.example .env
```

Edit `.env`:

```env
PORT=3000
DATABASE_URL="postgresql://admin:admin@localhost:5433/ecommerce"
JWT_SECRET="your_secret_key"
STRIPE_SECRET_KEY="sk_test_..."
```

---

## Database Setup (Docker)

Run PostgreSQL:

```bash
docker run --name ecommerce-db \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=admin \
  -e POSTGRES_DB=ecommerce \
  -p 5433:5432 \
  -d postgres
```

---

## Prisma Setup

```bash
npx prisma migrate dev
npx prisma generate
```

---

## Run the App

```bash
npm run dev
```

Server will be available at:

```
http://localhost:3000
```

---

## API Endpoints

### 1️⃣ Authentication

#### Register

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"123456"}'
```

#### Login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"123456"}'
```

Response:

```json
{
  "token": "JWT_TOKEN"
}
```

---

### 2️⃣ Products

#### Create product

```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer JWT_TOKEN" \
  -d '{
    "name": "MacBook Pro",
    "description": "Apple laptop",
    "price": 1999,
    "stock": 5
  }'
```

#### Get all products

```bash
curl http://localhost:3000/products
```

#### Get product by id

```bash
curl http://localhost:3000/products/PRODUCT_ID
```

#### Delete product

```bash
curl -X DELETE http://localhost:3000/products/PRODUCT_ID \
  -H "Authorization: Bearer JWT_TOKEN"
```

---

### 3️⃣ Cart

#### Add to cart

```bash
curl -X POST http://localhost:3000/cart/add \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer JWT_TOKEN" \
  -d '{"productId":"PRODUCT_ID"}'
```

#### Get cart

```bash
curl http://localhost:3000/cart \
  -H "Authorization: Bearer JWT_TOKEN"
```

#### Remove from cart

```bash
curl -X DELETE http://localhost:3000/cart/remove \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer JWT_TOKEN" \
  -d '{"productId":"PRODUCT_ID"}'
```

---

### 4️⃣ Payments (Stripe)

#### Checkout

```bash
curl -X POST http://localhost:3000/payments/checkout \
  -H "Authorization: Bearer JWT_TOKEN"
```

Response:

```json
{
  "url": "https://checkout.stripe.com/..."
}
```

Open the URL in browser to complete payment.

---

## Test Flow

1. Register / Login → get JWT
2. Create product
3. Add product to cart
4. Checkout via Stripe

---

## Project Structure

```
src/
├─ controllers/
├─ services/
├─ routes/
├─ middleware/
├─ utils/
└─ index.ts

prisma/
├─ schema.prisma
└─ migrations/
```

---

## Environment Variables

| Variable          | Description                  | Example                                           |
| ----------------- | ---------------------------- | ------------------------------------------------- |
| PORT              | Server port                  | 3000                                              |
| DATABASE_URL      | PostgreSQL connection string | postgresql://admin:admin@localhost:5433/ecommerce |
| JWT_SECRET        | Secret for JWT               | your_secret                                       |
| STRIPE_SECRET_KEY | Stripe API key               | sk_test_...                                       |

---

## Notes

* Passwords are hashed using bcrypt
* JWT is used for authentication
* Protected routes require Authorization header
* Cart supports quantity increment
* Stripe is used in **test mode**
* `.env` should not be committed to Git

---

## Project link

[https://roadmap.sh/projects/ecommerce-api](https://roadmap.sh/projects/ecommerce-api)
