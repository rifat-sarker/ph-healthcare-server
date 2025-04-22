import prisma from "../../utils/prisma";

const getAllAdminFromDB = async (params: any) => {
  console.log(params);
  const result = await prisma.admin.findMany({
    where: {
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
    },
  });
  return result;
};

export const adminSerivce = {
  getAllAdminFromDB,
};
