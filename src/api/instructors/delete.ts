import { InstructorHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";

const deleteOne: InstructorHandler["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedInstructor = await prisma.instructor.delete({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default deleteOne;
