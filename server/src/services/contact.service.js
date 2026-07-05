import prisma from "../config/prisma.js";

export const createContactMessage = async (payload) => {
  const result = await prisma.contactMessage.create({
    data: payload,
  });

  return result;
};