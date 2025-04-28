import { Request, Response } from "express";
import { AdminService } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";

const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, adminFilterableFields);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    console.log(options);

    const result = await AdminService.getAllAdminFromDB(filters, options);
    res.status(200).json({
      success: true,
      message: "All admin data fetched",
      meta: result.meta,
      data: result.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name || "Something went wrong",
      error: error,
    });
  }
};

const getByIdFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await AdminService.getByIdFromDB(id);
    res.status(200).json({
      success: true,
      message: "Admin data fetched by id!",
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

const updateIntoDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await AdminService.updateIntoDB(id, req.body);
    res.status(200).json({
      success: true,
      message: "Admin data updated!",
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

const deleteFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await AdminService.deleteFromDB(id);

    res.status(200).json({
      success: true,
      message: "Admin data deleted!",
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
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
