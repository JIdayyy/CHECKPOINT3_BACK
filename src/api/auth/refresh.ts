import prisma from "../../../prisma/prismaClient";
import bcrypt from "bcryptjs";
import AuthHandlers from "./interfaces";
import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
const refresh: AuthHandlers["refresh"] = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;

    if (typeof token === "undefined") {
      throw new Error("You need to login.");
    }

    console.log(token);
    req.user = jwt.verify(token, process.env.TOKEN_SECRET as string);
    res.cookie("token", token, {
      maxAge: 3600,
      secure: false, // set to true if your using https
      httpOnly: true,
    });
    res.set({
      "Access-Control-Allow-Credentials": true,
    });

    const user = await prisma.user.findUnique({ where: { id: req.user.id } });

    res.status(200).json(user);
  } catch (err) {
    res.status(401);

    return next(err);
  }
};

export default refresh;
