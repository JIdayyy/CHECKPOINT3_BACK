import { CommentHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getUser: CommentHandler["getUser"] = async (req, res, next) => {
  const { commentId } = req.params;

  try {
    const user = await prisma.user.findFirst({
      where: {
        comments: {
          some: { id: commentId },
        },
      },
      rejectOnNotFound: true,
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export default getUser;
