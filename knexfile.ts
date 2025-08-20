import type { Knex } from 'knex';

import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
	client: 'postgresql',
	connection: {
		port: Number(process.env.DATABASE_PORT) || 5432,
		host: process.env.DATABASE_HOST,
		database: process.env.DATABASE_NAME,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_ACCESS_KEY,
	},
	migrations: {
		directory: './src/db/migrations',
	},
	seeds: { directory: './src/db/seeds' },
};

export default dbConfig as Knex.Config;
