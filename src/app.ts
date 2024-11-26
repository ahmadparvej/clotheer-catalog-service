import express, { Request, Response } from "express";
import { HttpError } from "http-errors";
import logger from "./config/logger";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((err: HttpError, req: Request, res: Response) => {
  logger.error(err.message);

  res.status(err.statusCode).json({
    errors: [
      {
        message: err.message,
        type: err.name,
      },
    ],
  });
});

export default app;
