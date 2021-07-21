import { CampusHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getAll: CampusHandler["getAll"] = async (req, res, next) => {
  try {
    const Campuss = await prisma.campus.findMany();
    res.status(200).json(Campuss);
  } catch (error) {
    next(error);
  }
};

export default getAll;
