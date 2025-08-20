import { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> => {
	return knex.schema.createTable('superheroes', (table) => {
		table.increments('id').primary();
		table.string('nickname').notNullable();
		table.string('real_name');
		table.text('origin_description');
		table.text('superpowers');
		table.text('catch_phrase');
		table.timestamps(true, true);
	});
};

export const down = async (knex: Knex): Promise<void> => {
	return knex.schema.dropTable('superheroes');
};
