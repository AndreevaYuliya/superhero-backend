import db from "../db/knex";

export async function getAll(page: number, limit: number) {
  const superheroes = await db("superheroes")
    .select("*")
    .limit(limit)
    .offset((page - 1) * limit);

  for (const hero of superheroes) {
    const [image] = await db("superhero_images")
      .where("superhero_id", hero.id)
      .limit(1);
    hero.image = image ? image.image_url : null;
  }
  return superheroes;
}

export async function getById(id: number) {
  const hero = await db("superheroes").where({ id }).first();
  const images = await db("superhero_images").where("superhero_id", id);
  return { ...hero, images };
}

export async function create(data: any, imageUrls: string[]) {
  const [id] = await db("superheroes").insert(data).returning("id");
  if (imageUrls.length) {
    await db("superhero_images").insert(
      imageUrls.map((url) => ({ superhero_id: id.id ?? id, image_url: url }))
    );
  }
  return getById(id.id ?? id);
}

export async function update(id: number, data: any, imageUrls: string[]) {
  await db("superheroes").where({ id }).update(data);
  if (imageUrls.length) {
    await db("superhero_images").where({ superhero_id: id }).del();
    await db("superhero_images").insert(
      imageUrls.map((url) => ({ superhero_id: id, image_url: url }))
    );
  }
  return getById(id);
}

export async function remove(id: number) {
  return db("superheroes").where({ id }).del();
}
