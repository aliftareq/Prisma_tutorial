import express from "express";
import { categoryController } from "./category.controller";

const router = express.Router();

router.post("/create-category", categoryController.insertintoDB);

export const categoryRoutes = router;
