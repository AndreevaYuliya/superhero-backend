import { Request, Response } from "express";
import * as service from "../services/superhero.service";

export async function getAll(req: Request, res: Response) {
  const { page = 1, limit = 5 } = req.query;
  const superheroes = await service.getAll(Number(page), Number(limit));
  res.json(superheroes);
}

export async function getById(req: Request, res: Response) {
  const superhero = await service.getById(Number(req.params.id));
  res.json(superhero);
}

export async function create(req: Request, res: Response) {
  const { nickname, real_name, origin_description, superpowers, catch_phrase } =
    req.body;
  const files = req.files as Express.Multer.File[];
  const imageUrls = files.map((file) => `/uploads/${file.filename}`);
  const newHero = await service.create(
    { nickname, real_name, origin_description, superpowers, catch_phrase },
    imageUrls
  );
  res.status(201).json(newHero);
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const { nickname, real_name, origin_description, superpowers, catch_phrase } =
    req.body;
  const files = req.files as Express.Multer.File[];
  const imageUrls = files.map((file) => `/uploads/${file.filename}`);
  const updatedHero = await service.update(
    Number(id),
    { nickname, real_name, origin_description, superpowers, catch_phrase },
    imageUrls
  );
  res.json(updatedHero);
}

export async function remove(req: Request, res: Response) {
  await service.remove(Number(req.params.id));
  res.status(204).send();
}
