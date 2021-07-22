import { CampusHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getPromo: CampusHandler["getPromo"] = async (req, res, next) => {
  const { campusId } = req.params;

  try {
    const Promo = await prisma.promo.findFirst({
      where: {
        comments: {
          some: { id: campusId },
        },
      },
      rejectOnNotFound: true,
    });
    res.status(200).json(Promo);
  } catch (error) {
    next(error);
  }
};

export default getPromo;
