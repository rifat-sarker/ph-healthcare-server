import { Request, Response } from "express";
import { adminSerivce } from "./admin.service";

const getAllAdmin = async (req: Request, res: Response) => {
  const result = await adminSerivce.getAllAdminFromDB();

  res.status(200).json({
    success: true,
    message: "All admin data fetched",
    data: result,
  });
};

export const adminController = {
  getAllAdmin,
};
