import { Router } from 'express';

import * as controller from '../controllers/superhero.controller';

import upload from '../middleware/upload';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', upload.array('images', 5), controller.create);
router.put('/:id', upload.array('images', 5), controller.update);
router.delete('/:id/images/:id', controller.removeImage);
router.delete('/:id', controller.remove);

export default router;
