import { RequestHandler } from "express";
import { User } from ".prisma/client";
interface register {
  email: string;
  password: string;
}

interface Login {
  email: string;
  password: string;
}

interface UserWithoutPassword extends Omit<User, "password"> {}

export default interface AuthHandlers {
  register: RequestHandler<register, UserWithoutPassword, register>;

  login: RequestHandler<Record<string, never>, UserWithoutPassword | { message: string } | Error, register>;
}
