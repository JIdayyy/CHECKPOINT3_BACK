import { RequestHandler } from "express";
import { Session } from ".prisma/client";

interface ReqBodySessionPost {
  id: string;
  date: string;
  campusId: string;
}
interface ReqBodySessionPut {
  id?: string;
  date?: string;
  campusId?: string;
}

export interface SessionHandler {
  getAll: RequestHandler<Record<string, never>, Session[], null>;
  getOne: RequestHandler<{ id: string }, Session | Error, null>;
  post: RequestHandler<Record<string, never>, Session | Error, ReqBodySessionPost>;
  put: RequestHandler<{ id: string }, null | Error, ReqBodySessionPut>;
  delete: RequestHandler<{ id: string }, null | Error, null>;
}
