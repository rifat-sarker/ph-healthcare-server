import prisma from "../../utils/prisma";

const getAllAdminFromDB = async () => {
  const result = await prisma.admin.findMany();
  return result;
};

export const adminSerivce = {
    getAllAdminFromDB
}
