import { Router } from "express";
import upload from "../middleware/upload";
import * as controller from "../controllers/superhero.controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", upload.array("images", 5), controller.create);
router.put("/:id", upload.array("images", 5), controller.update);
router.delete("/:id", controller.remove);

export default router;
