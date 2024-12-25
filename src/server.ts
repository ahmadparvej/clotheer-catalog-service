import app from "./app";
import logger from "./config/logger";
import config from "config";
import { initDB } from "./config/db";

const startServer = async () => {
  const PORT = config.get<number>("server.port") || 3000;
  try {
    await initDB();

    app.listen(PORT, () => {
      logger.info(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
