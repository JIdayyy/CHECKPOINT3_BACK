import { RequestHandler } from "express";
import { Instructor } from ".prisma/client";

interface ReqBodyInstructorPost {
  username: string;
  firstname: string;
  lastname: string;
  birthDate: Date;
}
interface ReqBodyInstructorPut {
  username?: string;
  firstname?: string;
  lastname?: string;
  birthDate: Date;
}

export interface InstructorHandler {
  getAll: RequestHandler<Record<string, never>, Instructor[], null>;
  getOne: RequestHandler<{ id: string }, Instructor | Error, null>;
  post: RequestHandler<Record<string, never>, Instructor | Error, ReqBodyInstructorPost>;
  put: RequestHandler<{ id: string }, null | Error, ReqBodyInstructorPut>;
  delete: RequestHandler<{ id: string }, null | Error, null>;
}
