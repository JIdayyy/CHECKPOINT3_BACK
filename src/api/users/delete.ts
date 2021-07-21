import prisma from "../../../prisma/prismaClient";
import UserHandler from "./interfaces";

const deleteOne: UserHandler["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedUser = await prisma.user.delete({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default deleteOne;
