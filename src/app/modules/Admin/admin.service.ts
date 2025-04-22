import { Prisma } from "@prisma/client";
import prisma from "../../utils/prisma";

const getAllAdminFromDB = async (params: any) => {
  const andConditions: Prisma.AdminWhereInput[] = [];
  if (params.searchTerm) {
    andConditions.push({
      OR: [
        {
          name: {
            contains: params.searchTerm,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: params.searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });
  }
  const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };
  const result = await prisma.admin.findMany({
    where: whereConditions,
  });
  return result;
};

export const adminSerivce = {
  getAllAdminFromDB,
};
