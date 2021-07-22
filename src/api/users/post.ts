import prisma from "../../../prisma/prismaClient";
import UserHandler from "./interfaces";
import bcrypt from "bcryptjs";
const post: UserHandler["post"] = async (req, res, next) => {
  const { promoId, password, ...rest } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(req.body);
  try {
    const newUser = await prisma.user.create({
      data: {
        ...rest,
        password: hashedPassword,
        promo: {
          connect: {
            id: promoId,
          },
        },
      },
    });

    const { password: newPassword, ...userWithoutPassword } = newUser;
    res.status(201).send(userWithoutPassword);
  } catch (error) {
    next(error);
  }
};

export default post;
