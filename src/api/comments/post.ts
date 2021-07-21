import { CommentHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const post: CommentHandler["post"] = async (req, res, next) => {
  const { body } = req;
  try {
    const newComment = await prisma.comment.create({
      data: body,
    });
  } catch (error) {
    next(error);
  }
};
export default post;
