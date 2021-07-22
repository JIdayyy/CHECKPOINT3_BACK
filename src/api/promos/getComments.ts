import { PromoHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getComments: PromoHandler["getComments"] = async (req, res, next) => {
  const { promoId } = req.params;

  try {
    const comments = await prisma.comment.findMany({
      where: {
        promoId,
      },
    });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

export default getComments;
