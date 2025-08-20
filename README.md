# 🦸 Superhero API (Backend)

This is the backend for the **Superhero App**, built with **Node.js, Express, Knex, and PostgreSQL**.

---

## 🚀 Features
- REST API for managing superheroes
- PostgreSQL database with migrations
- Image upload support (`/uploads` folder)
- Knex.js query builder

---

## 🛠️ Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-repo/superhero-app.git
cd superhero-app/backend
```
### 2. Install dependencies
```bash
yarn install
# or
npm install
```

### 3. Configure environment variables
Create a .env file in the backend root:
```bash
DB_HOST=localhost
DB_USER=postgres
DB_PASS=yourpassword
DB_NAME=superheroes_db
DB_PORT=5432

PORT=4000
```

### 4. Run PostgreSQL locally
Make sure PostgreSQL is installed and running.
To start a database locally:
```bash
createdb superheroes_db
```
### 5. Run migrations
```bash
npx knex migrate:latest --knexfile knexfile.ts
```

### 6. Start the server
```bash
yarn start
# or for development with nodemon
yarn dev
```
### 7. ✅ Testing
```bash
yarn test
```
