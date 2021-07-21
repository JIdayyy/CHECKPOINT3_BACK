import { PromoHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getAll: PromoHandler["getAll"] = async (req, res, next) => {
  try {
    const promos = await prisma.promo.findMany();
    res.status(200).json(promos);
  } catch (error) {
    next(error);
  }
};

export default getAll;
