import { Response, Request } from "express";
import { categoryservice } from "./category.service";

const insertintoDB = async (req: Request, res: Response) => {
  try {
    const result = await categoryservice.insertintoDB(req.body);
    res.send({
      success: true,
      message: "category created successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const categoryController = {
  insertintoDB,
};
