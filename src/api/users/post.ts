import prisma from "../../../prisma/prismaClient";
import UserHandler from "./interfaces";

const post: UserHandler["post"] = async (req, res, next) => {
  const { email, lastname, password, firstname, picture, role, username } = req.body;
  console.log(req.body);
  try {
    const newUser = await prisma.user.create({
      data: { firstname, lastname, email, password, picture, role, username },
    });
    const { password: newPassword, ...userWithoutPassword } = newUser;
    res.status(201).send(userWithoutPassword);
  } catch (error) {
    next(error);
  }
};

export default post;
