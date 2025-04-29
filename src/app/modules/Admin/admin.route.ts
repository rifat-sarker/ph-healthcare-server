import express from "express";
import { adminController } from "./admin.controller";

const router = express.Router();

router.get("/", adminController.getAllAdmin);
router.get("/:id", adminController.getByIdFromDB);

router.patch("/:id", adminController.updateIntoDB);

router.delete("/:id", adminController.deleteFromDB);

router.delete("/soft/:id", adminController.softdeleteFromDB);
export const adminRoutes = router;
