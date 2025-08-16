import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  client: "postgresql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

    // port: process.env.DATABASE_PORT,
    // host: process.env.DATABASE_HOST,
    // database: process.env.DATABASE_NAME,
    // user: process.env.DATABASE_USER,
    // password: process.env.DATABASE_ACCESS_KEY,
  },
  migrations: {
    directory: "./src/db/migrations",
  },
};

export default dbConfig as Knex.Config;
