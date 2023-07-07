import express from "express";
//configurar variables de entorno
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
//rutas
import userRoutes from "./routes/userRoutes.js";
import accountRoutes from "./routes/account.routes.js";
import cardRoutes from "./routes/card.routes.js";
import AppError from "./utils/AppError.js";
import globalErrorHandler from "./controllers/error.controller.js";

//manejo de errores

const app = express();
//MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(hpp());
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: "too many renders from this api",
});
app.use("/api/v1", limiter);

//ROUTES
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/account", accountRoutes);
app.use("/api/v1/card", cardRoutes);

// cualquier ruta no declarada
app.all("*", (req, res, next) => {
  return next(
    new AppError(`Cant find ${req.originalUrl} on this server!`, 404)
  );
});
app.use(globalErrorHandler);

export default app;
