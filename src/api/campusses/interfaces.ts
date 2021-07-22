import { RequestHandler } from "express";
import { Campus } from ".prisma/client";
import { Promo } from ".prisma/client";

interface ReqBodyCampusPost {
  name: string;
  city: string;
  country: string;
}
interface ReqBodyCampusPut {
  name?: string;
  city?: string;
  country?: string;
}

export interface CampusHandler {
  getAll: RequestHandler<Record<string, never>, Campus[], null>;
  getOne: RequestHandler<{ id: string }, Campus | Error, null>;
  getPromo: RequestHandler<{ campusId: string }, Promo | Error, null>;
  post: RequestHandler<Record<string, never>, Campus | Error, ReqBodyCampusPost>;
  put: RequestHandler<{ id: string }, null | Error, ReqBodyCampusPut>;
  delete: RequestHandler<{ id: string }, null | Error, null>;
}
