import { SessionHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const put: SessionHandler["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedSession = await prisma.session.update({ where: { id }, data: body });
  } catch (error) {}
};

export default put;
