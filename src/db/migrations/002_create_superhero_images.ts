import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("superhero_images", (table) => {
    table.increments("id").primary();
    table
      .integer("superhero_id")
      .references("id")
      .inTable("superheroes")
      .onDelete("CASCADE");
    table.string("image_url").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("superhero_images");
}
