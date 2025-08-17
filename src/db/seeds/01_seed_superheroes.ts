import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("superhero_images").del();
  await knex("superheroes").del();

  const [id] = await knex("superheroes")
    .insert({
      nickname: "Superman",
      real_name: "Clark Kent",
      origin_description: "From Krypton",
      superpowers: "flight,heat vision,invulnerability",
      catch_phrase: "Up in the sky!",
    })
    .returning("id")
    .then((r) => (Array.isArray(r) ? [r[0].id ?? r[0]] : [r]));

  await knex("superhero_images").insert([
    { superhero_id: id, image_url: "/static/sample-superman.jpg" },
  ]);
}
