import { CampusHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";

const put: CampusHandler["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedCampus = await prisma.campus.update({
      where: { id },
      data: body,
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
export default put;
