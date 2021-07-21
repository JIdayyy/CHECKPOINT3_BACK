import { CommentHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getOne: CommentHandler["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const Comment = await prisma.comment.findUnique({ where: { id }, rejectOnNotFound: true });
    res.status(200).json(Comment);
  } catch (error) {
    next(error);
  }
};
export default getOne;
