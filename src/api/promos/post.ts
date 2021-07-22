import { PromoHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const post: PromoHandler["post"] = async (req, res, next) => {
  const { body } = req;
  try {
    const newPromo = await prisma.promo.create({
      data: body,
    });
    res.status(200).json(newPromo);
  } catch (error) {
    next(error);
  }
};
export default post;
