import prisma from "../../../prisma/prismaClient";
import bcrypt from "bcryptjs";
import AuthHandlers from "./interfaces";
import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
const refresh: AuthHandlers["refresh"] = async (req: any, res: Response, next: NextFunction) => {
  try {
    console.log("Cookies: ", req.cookies);
    const rawToken = req.headers.cookie;
    const token = rawToken?.split("=");

    if (typeof token === "undefined") {
      throw new Error("You need to login.");
    }
    const index = token.indexOf("token");

    req.user = jwt.verify(token[index + 1], process.env.TOKEN_SECRET as string);
    res.cookie("token", token, {
      expires: new Date(Date.now() + "3600s"),
      secure: false, // set to true if your using https
      httpOnly: true,
    });
    console.log(res.cookie);
    res.status(200).json({ message: "Allready logged " });
  } catch (err) {
    res.status(401);

    return next(err);
  }
};

export default refresh;
