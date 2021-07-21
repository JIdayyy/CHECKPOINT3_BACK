import { SessionHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const post: SessionHandler["post"] = async (req, res, next) => {
  const { body } = req;
  try {
    const session = await prisma.session.create({
      data: body,
    });
  } catch (error) {
    next(error);
  }
};
export default post;
