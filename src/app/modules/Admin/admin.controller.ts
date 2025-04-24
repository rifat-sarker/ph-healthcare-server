import { Request, Response } from "express";
import { adminSerivce } from "./admin.service";
import pick from "../../../shared/pick";

const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, [
      "name",
      "email",
      "searchTerm",
      "contactNumber",
    ]);
    const result = await adminSerivce.getAllAdminFromDB(filters);
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
