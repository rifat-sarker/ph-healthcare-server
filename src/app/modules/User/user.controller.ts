import { Request, Response } from "express";
import { userSerice } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await userSerice.createAdmin(req.body);
    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};

export const userController = {
  createAdmin,
};
