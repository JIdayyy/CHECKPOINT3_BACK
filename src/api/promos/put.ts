import { PromoHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";

const put: PromoHandler["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedPromo = await prisma.promo.update({ where: { id }, data: body });
  } catch (error) {
    next(error);
  }
};
export default put;
