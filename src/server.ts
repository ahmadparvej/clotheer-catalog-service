import app from "./app";
import logger from "./config/logger";
import config from "config";

const startServer = () => {
  const PORT = config.get<number>("server.port") || 3000;
  try {
    app.listen(PORT, () => {
      logger.info(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
