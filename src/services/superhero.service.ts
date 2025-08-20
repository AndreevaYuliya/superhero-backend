import db from '../db/knex';
import { Superhero, SuperheroDB } from '../models/superhero.model';

export const getAll = async (page: number, limit: number) => {
	const offset = (page - 1) * limit;

	const countResult: { count: string }[] = await db('superheroes').count('id as count');
	const total = Number(countResult[0]?.count || 0);

	const superheroesDB: SuperheroDB[] = await db('superheroes')
		.select('*')
		.limit(limit)
		.offset(offset);

	const superheroes: Superhero[] = [];

	for (const hero of superheroesDB) {
		const firstImage = await db('superhero_images')
			.where('superhero_id', hero.id)
			.select('image_url')
			.first();

		superheroes.push({
			...hero,
			superpowers: hero.superpowers ? JSON.parse(hero.superpowers) : [],
			image: firstImage ? firstImage.image_url : null,
		});
	}

	return {
		items: superheroes,
		total,
		limit,
		offset,
	};
};

export const getById = async (id: number): Promise<Superhero | null> => {
	const hero: SuperheroDB | undefined = await db('superheroes').where({ id }).first();

	if (!hero) return null;

	const images = await db('superhero_images')
		.where('superhero_id', id)
		.select('id', 'image_url', 'created_at', 'updated_at');

	return {
		...hero,
		superpowers: hero.superpowers ? JSON.parse(hero.superpowers) : [],
		images,
	};
};

export const create = async (
	data: Omit<Superhero, 'id' | 'images' | 'image'>,
	imageUrls: string[],
): Promise<Superhero | null> => {
	const [insertedId] = await db('superheroes')
		.insert({ ...data, superpowers: JSON.stringify(data.superpowers) })
		.returning('id');

	if (imageUrls.length) {
		await db('superhero_images').insert(
			imageUrls.map((url) => ({
				superhero_id: insertedId.id ?? insertedId,
				image_url: url,
			})),
		);
	}

	return getById(insertedId.id ?? insertedId);
};

export const update = async (
	id: number,
	data: Omit<Superhero, 'id' | 'images' | 'image'>,
	imageUrls: string[],
): Promise<Superhero | null> => {
	await db('superheroes')
		.where({ id })
		.update({ ...data, superpowers: JSON.stringify(data.superpowers) });

	if (imageUrls.length) {
		await db('superhero_images').insert(
			imageUrls.map((url) => ({ superhero_id: id, image_url: url })),
		);
	}

	return getById(id);
};

export const removeImage = async (id: number): Promise<number> => {
	return db('superhero_images').where({ id }).del();
};

export const remove = async (id: number): Promise<number> => {
	return db('superheroes').where({ id }).del();
};
