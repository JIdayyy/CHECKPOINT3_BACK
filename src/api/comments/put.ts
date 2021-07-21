import { CommentHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";

const put: CommentHandler["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedComment = await prisma.comment.update({
      where: { id },
      data: body,
    });
  } catch (error) {
    next(error);
  }
};
export default put;
