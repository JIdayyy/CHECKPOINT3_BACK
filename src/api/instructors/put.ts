import { InstructorHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";

const put: InstructorHandler["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedInstructor = await prisma.instructor.update({
      where: { id },
      data: body,
    });
  } catch (error) {
    next(error);
  }
};
export default put;
