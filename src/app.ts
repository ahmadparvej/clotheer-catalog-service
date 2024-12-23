import express, { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import logger from "./config/logger";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);

  res.status(err.statusCode).json({
    errors: [
      {
        message: err.message,
        type: err.name,
      },
    ],
  });

  next();
});

export default app;
