import { CampusHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const post: CampusHandler["post"] = async (req, res, next) => {
  const { body } = req;
  try {
    const newCampus = await prisma.campus.create({
      data: body,
    });
  } catch (error) {
    next(error);
  }
};
export default post;
