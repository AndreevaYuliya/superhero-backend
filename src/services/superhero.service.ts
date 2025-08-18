import db from "../db/knex";

export async function getAll(page: number, limit: number) {
  const offset = (page - 1) * limit;

  // 1. Get total number of superheroes
  const countResult: { count: string }[] = await db("superheroes").count("id as count");
  const total = Number(countResult[0]?.count || 0);

  // 2. Get heroes
  const superheroes = await db("superheroes")
    .select("*")
    .limit(limit)
    .offset(offset);

  // 3. Attach only the first image
  for (const hero of superheroes) {
    const firstImage = await db("superhero_images")
      .where("superhero_id", hero.id)
      .select("image_url")
      .first(); // only the first image

    hero.image = firstImage ? firstImage.image_url : null; // single image

    // Парсим superpowers из строки в массив
    hero.superpowers = hero.superpowers ? JSON.parse(hero.superpowers) : [];
  }

  return {
    items: superheroes,  // array of heroes
    total,               // total heroes count
    limit,               // limit per page
    offset,              // offset
  };
}

export async function getById(id: number) {
  const hero = await db("superheroes").where({ id }).first();
  if (!hero) return null;

  const images = await db("superhero_images")
    .where("superhero_id", id)
    .select("id", "image_url", "created_at", "updated_at");

    // Парсим superpowers из строки в массив
    hero.superpowers = hero.superpowers ? JSON.parse(hero.superpowers) : [];

  return { ...hero, images }; // full array of images for details
}

export async function create(data: any, imageUrls: string[]) {
  const [id] = await db("superheroes").insert({ ...data, superpowers: JSON.stringify(data.superpowers) }).returning("id");

  if (imageUrls.length) {
    await db("superhero_images").insert(
      imageUrls.map((url) => ({ superhero_id: id.id ?? id, image_url: url }))
    );
  }

  return getById(id.id ?? id);
}

export async function update(id: number, data: any, imageUrls: string[], retainImageIds: number[]) {
  console.log(11111)
  console.log(11111)
  console.log(11111)
  console.log(11111)
  await db("superheroes").where({ id }).update({ ...data, superpowers: JSON.stringify(data.superpowers) });

  // удалить старые изображения, которых нет в retainImageIds
  await db("superhero_images")
    .where({ superhero_id: id })
    .whereNotIn("id", retainImageIds)
    .del();

  if (imageUrls.length) {
    // await db("superhero_images").where({ superhero_id: id }).del();
    await db("superhero_images").insert(
      imageUrls.map((url) => ({ superhero_id: id, image_url: url }))
    );
  }

  return getById(id);
}

export async function removeImage(id: number) {
  return db("superhero_images").where({id}).del()
  
}

export async function remove(id: number) {
  return db("superheroes").where({ id }).del();
}
