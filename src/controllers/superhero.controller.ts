import { Request, Response } from 'express';

import * as service from '../services/superhero.service';

export const getAll = async (req: Request, res: Response) => {
	const { page = 1, limit = 5 } = req.query;

	const superheroes = await service.getAll(Number(page), Number(limit));

	res.json(superheroes);
};

export const getById = async (req: Request, res: Response) => {
	const superhero = await service.getById(Number(req.params.id));

	res.json(superhero);
};

export const create = async (req: Request, res: Response) => {
	const { nickname, real_name, origin_description, superpowers, catch_phrase } = req.body;

	const files = req.files as Express.Multer.File[];
	const imageUrls = files.map((file) => `/uploads/${file.filename}`);

	const newHero = await service.create(
		{
			nickname,
			real_name,
			origin_description,
			superpowers,
			catch_phrase,
		},
		imageUrls,
	);
	res.status(201).json(newHero);
};

export const update = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { nickname, real_name, origin_description, superpowers, catch_phrase } = req.body;

	const files = req.files as Express.Multer.File[];
	const imageUrls = files.map((file) => `/uploads/${file.filename}`);

	const updatedHero = await service.update(
		Number(id),
		{
			nickname,
			real_name,
			origin_description,
			superpowers,
			catch_phrase,
		},
		imageUrls,
	);

	res.json(updatedHero);
};

export const removeImage = async (req: Request, res: Response) => {
	await service.removeImage(Number(req.params.id));
};

export const remove = async (req: Request, res: Response) => {
	await service.remove(Number(req.params.id));

	res.status(204).send();
};
