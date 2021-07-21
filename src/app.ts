import express from "express";
import cors from "cors";
import helmet from "helmet";
import api from "./api/index";

const app = express();

// Basics middlewares needed to build our api
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(api);
// Swagger documentation

export default app;
