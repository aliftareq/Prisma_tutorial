import express from "express";
import { postController } from "./post.controller";

const router = express.Router();

router.get("/", postController.getAllPostController);
router.get("/:id", postController.getSinglePostController);
router.post("/create-post", postController.createPostController);

export const postRoutes = router;
