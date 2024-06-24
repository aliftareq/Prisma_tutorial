import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getSingleUser);
router.post("/create-user", UserController.insertIntoDB);
router.post("/profile", UserController.insertOrUpdateProfile);

export const userRoutes = router;
