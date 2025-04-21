import { Request, Response } from "express";
import { userSerice } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  const result = await userSerice.createAdmin();
  res.send(result);
};

export const userController = {
  createAdmin,
};
