import { PromoHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";

const deleteOne: PromoHandler["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedPromo = await prisma.promo.delete({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default deleteOne;
