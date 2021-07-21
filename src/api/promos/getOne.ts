import { PromoHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getOne: PromoHandler["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const promo = await prisma.promo.findUnique({ where: { id }, rejectOnNotFound: true });
    res.status(200).json(promo);
  } catch (error) {
    next(error);
  }
};
export default getOne;
