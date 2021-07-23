import { CommentHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const post: CommentHandler["post"] = async (req, res, next) => {
  const { promoId, userId, ...rest } = req.body;

  try {
    const newComment = await prisma.comment.create({
      data: {
        ...rest,
        user: {
          connect: {
            id: userId,
          },
        },
        promo: {
          connect: {
            id: promoId,
          },
        },
      },
    });
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
};
export default post;
