import { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> => {
	return knex.schema.createTable('superhero_images', (table) => {
		table.increments('id').primary();
		table.integer('superhero_id').references('id').inTable('superheroes').onDelete('CASCADE');
		table.string('image_url').notNullable();
		table.timestamps(true, true);
	});
};

export const down = async (knex: Knex): Promise<void> => {
	return knex.schema.dropTable('superhero_images');
};
