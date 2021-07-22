import { CampusHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";

const deleteOne: CampusHandler["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    // const deletedSession = await prisma.session.delete({
    //   where: { id },
    // });
    const deletedCampus = await prisma.campus.delete({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default deleteOne;
