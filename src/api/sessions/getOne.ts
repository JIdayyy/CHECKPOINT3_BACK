import { SessionHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getOne: SessionHandler["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const session = await prisma.session.findUnique({ where: { id }, rejectOnNotFound: true });

    res.status(200).send(session);
  } catch (error) {
    next(error);
  }
};

export default getOne;
