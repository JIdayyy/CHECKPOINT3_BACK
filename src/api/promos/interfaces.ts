import { RequestHandler } from "express";
import { Promo } from ".prisma/client";
import { Comment } from ".prisma/client";

interface ReqBodyPromoPost {
  title: string;
  description: string;
  date: string;
  campusId: string;
  sessionId: string;
}
interface ReqBodyPromoPut {
  title?: string;
  description?: string;
  date?: string;
  campusId?: string;
  sessionId?: string;
}

export interface PromoHandler {
  getAll: RequestHandler<Record<string, never>, Promo[], null>;
  getOne: RequestHandler<{ id: string }, Promo | Error, null>;
  post: RequestHandler<Record<string, never>, Promo | Error, ReqBodyPromoPost>;
  put: RequestHandler<{ id: string }, null | Error, ReqBodyPromoPut>;
  getComments: RequestHandler<{ promoId: string }, Comment[] | Error, null>;
  delete: RequestHandler<{ id: string }, null | Error, null>;
}
