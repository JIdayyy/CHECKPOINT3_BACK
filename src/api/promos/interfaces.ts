import { RequestHandler } from "express";
import { Promo } from ".prisma/client";

interface ReqBodyPromoPost {
  title: string;
  description: string;
  date: string;
}
interface ReqBodyPromoPut {
  title?: string;
  description?: string;
  date?: string;
}

export interface PromoHandler {
  getAll: RequestHandler<Record<string, never>, Promo[], null>;
  getOne: RequestHandler<{ id: string }, Promo | Error, null>;
  post: RequestHandler<Record<string, never>, Promo | Error, ReqBodyPromoPost>;
  put: RequestHandler<{ id: string }, null | Error, ReqBodyPromoPut>;
  delete: RequestHandler<{ id: string }, null | Error, null>;
}
