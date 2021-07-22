import { RequestHandler } from "express";
import { Comment } from ".prisma/client";
import { User } from ".prisma/client";

interface ReqBodyCommentPost {
  body: string;
  picture: string;
  userId: string;
  promoId: string;
}
interface ReqBodyCommentPut {
  body?: string;
  picture?: string;
  userId?: string;
  promoId?: string;
}

export interface CommentHandler {
  getAll: RequestHandler<Record<string, never>, Comment[], null>;
  getOne: RequestHandler<{ id: string }, Comment | Error, null>;
  getUser: RequestHandler<{ commentId: string }, User | Error, null>;
  post: RequestHandler<Record<string, never>, Comment | Error, ReqBodyCommentPost>;
  put: RequestHandler<{ id: string }, null | Error, ReqBodyCommentPut>;
  delete: RequestHandler<{ id: string }, null | Error, null>;
}
