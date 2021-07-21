import { CommentHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getAll: CommentHandler["getAll"] = async (req, res, next) => {
  try {
    const Comments = await prisma.comment.findMany();
    res.status(200).json(Comments);
  } catch (error) {
    next(error);
  }
};

export default getAll;
