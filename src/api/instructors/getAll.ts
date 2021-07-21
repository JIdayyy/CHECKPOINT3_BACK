import { InstructorHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getAll: InstructorHandler["getAll"] = async (req, res, next) => {
  try {
    const Instructors = await prisma.instructor.findMany();
    res.status(200).json(Instructors);
  } catch (error) {
    next(error);
  }
};

export default getAll;
