import prisma from "../../../prisma/prismaClient";
import UserHandler from "./interfaces";

const put: UserHandler["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  console.log(body);
  try {
    await prisma.user.update({
      where: { id },
      data: body,
    });

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default put;
