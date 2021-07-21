import { InstructorHandler } from "./interfaces";
import prisma from "../../../prisma/prismaClient";
const getOne: InstructorHandler["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const Instructor = await prisma.instructor.findUnique({ where: { id }, rejectOnNotFound: true });
    res.status(200).json(Instructor);
  } catch (error) {
    next(error);
  }
};
export default getOne;
