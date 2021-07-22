import { CommentHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";

const deleteOne: CommentHandler["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.comment.delete({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default deleteOne;
