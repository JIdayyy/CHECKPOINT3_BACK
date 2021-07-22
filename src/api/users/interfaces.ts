import { User } from ".prisma/client";
import { RequestHandler } from "express";
import { Role } from "@prisma/client";

interface ReqBodyUserPost {
  email: string;
  password: string;
  username?: string;
  picture?: string;
  firstname?: string;
  lastname?: string;
  promoId: string;
  role?: Role;
}
interface UserWithoutPassword extends Omit<User, "password"> {}

interface ReqBodyUserPut {
  email?: string;
  password?: string;
  username?: string;
  picture?: string;
  firstname?: string;
  lastname?: string;
  promoId?: string;
  role?: Role;
}

export default interface UserHandler {
  getAll: RequestHandler<Record<string, never>, User[], null>;
  getOne: RequestHandler<{ id: string }, User, null>;
  post: RequestHandler<Record<string, never>, UserWithoutPassword | Error, ReqBodyUserPost>;
  put: RequestHandler<{ id: string }, null | Error, ReqBodyUserPut>;
  delete: RequestHandler<{ id: string }, null, null>;
}
