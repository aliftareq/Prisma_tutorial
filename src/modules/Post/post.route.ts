import express from "express";
import { postController } from "./post.controller";

const router = express.Router();

router.get("/learn-query", postController.learnAggregateAndGroupingController);
router.get("/:id", postController.getSinglePostController);
router.get("/", postController.getAllPostController);
router.post("/create-post", postController.createPostController);
router.patch("/:id", postController.updatePostController);
router.delete("/:id", postController.deletePostController);

export const postRoutes = router;
