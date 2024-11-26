import winston from "winston";
import { Config } from "./index";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "catalog-service" },
  transports: [
    new winston.transports.Console({
      format: winston.format.json(),
      level: "info",
      silent: Config.NODE_ENV === "test",
    }),
    new winston.transports.File({
      filename: "error.log",
      level: "error",
      format: winston.format.json(),
      dirname: "./logs",
      silent: Config.NODE_ENV === "test",
    }),
    new winston.transports.File({
      filename: "combined.log",
      format: winston.format.json(),
      dirname: "./logs",
      silent: Config.NODE_ENV === "test",
    }),
  ],
});

export default logger;
