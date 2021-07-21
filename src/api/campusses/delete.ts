import { CampusHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";

const deleteOne: CampusHandler["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCampus = await prisma.campus.delete({ where: { id: req.params.id } });
  } catch (error) {
    next(error);
  }
};

export default deleteOne;
