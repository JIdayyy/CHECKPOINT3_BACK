import { InstructorHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const post: InstructorHandler["post"] = async (req, res, next) => {
  const { body } = req;
  try {
    const newInstructor = await prisma.instructor.create({
      data: body,
    });
    res.status(200).json(newInstructor);
  } catch (error) {
    next(error);
  }
};
export default post;
