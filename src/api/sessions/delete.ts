import { SessionHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const deleteOne: SessionHandler["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedSession = await prisma.session.delete({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
export default deleteOne;
