import { Request, Response } from "express";
import { adminSerivce } from "./admin.service";

const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const result = await adminSerivce.getAllAdminFromDB(req.query);
    res.status(200).json({
      success: true,
      message: "All admin data fetched",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name || "Something went wrong",
      error: error,
    });
  }
};

export const adminController = {
  getAllAdmin,
};
