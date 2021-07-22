import express from "express";
import cors from "cors";
import helmet from "helmet";
import api from "./api/index";
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser());
// Basics middlewares needed to build our api
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(helmet());
app.use(express.json());
app.use(api);
// Swagger documentation

export default app;
