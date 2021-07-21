import { SessionHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getAll: SessionHandler["getAll"] = async (req, res, next) => {
  try {
    const sessions = await prisma.session.findMany();
    res.status(200).json(sessions);
  } catch (error) {
    next(error);
  }
};
export default getAll;
