import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("superheroes", (table) => {
    table.increments("id").primary();
    table.string("nickname").notNullable();
    table.string("real_name");
    table.text("origin_description");
    table.text("superpowers");
    table.text("catch_phrase");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("superheroes");
}
