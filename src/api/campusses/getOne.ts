import { CampusHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getOne: CampusHandler["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const Campus = await prisma.campus.findUnique({ where: { id }, rejectOnNotFound: true });
    res.status(200).json(Campus);
  } catch (error) {
    next(error);
  }
};
export default getOne;
