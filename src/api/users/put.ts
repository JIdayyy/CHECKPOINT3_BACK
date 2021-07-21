import prisma from "../../../prisma/prismaClient";
import UserHandler from "./interfaces";

const put: UserHandler["put"] = async (req, res, next) => {
  const { id } = req.params;

  const { body } = req;
  try {
    await prisma.user.update({
      where: { id },
      data: body,
    });

    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

export default put;
