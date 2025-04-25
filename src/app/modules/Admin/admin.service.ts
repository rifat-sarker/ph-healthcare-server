import { Prisma } from "@prisma/client";
import prisma from "../../utils/prisma";
import { adminSearchableFields } from "./admin.constant";

const getAllAdminFromDB = async (params: any, options: any) => {
  const { limit, page } = options;
  const { searchTerm, ...filterData } = params;
  const andConditions: Prisma.AdminWhereInput[] = [];

  if (params.searchTerm) {
    andConditions.push({
      OR: adminSearchableFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key],
        },
      })),
    });
  }
  const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };

  const result = await prisma.admin.findMany({
    where: whereConditions,
    skip: (Number(page) - 1) * limit,
    take: Number(limit),
  });
  return result;
};

export const adminSerivce = {
  getAllAdminFromDB,
};

/**
 * data = 1 2 3 4 5 6 7 8 9 10
 * page = 2
 * limit = 5
 * formula = (page - 1) * limit
 * (2-1) * 5 = 5
 
 * 
 */
