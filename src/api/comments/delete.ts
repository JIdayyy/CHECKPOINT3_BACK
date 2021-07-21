import { CommentHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";

const deleteOne: CommentHandler["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedComment = await prisma.comment.delete({ where: { id: req.params.id } });
  } catch (error) {
    next(error);
  }
};

export default deleteOne;