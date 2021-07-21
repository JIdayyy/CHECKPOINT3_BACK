import prisma from "../../../prisma/prismaClient";
import UserHandler from "./interfaces";

const put: UserHandler["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...body,
      },
    });
    const { password, ...userWithoutPassword } = updatedUser;
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default put;
