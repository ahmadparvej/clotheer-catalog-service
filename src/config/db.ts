import config from "config";
import mongoose from "mongoose";

export const initDB = async () => {
  const dbUrl = config.get<string>("database.url");
  await mongoose.connect(dbUrl);
  console.log("Database connected");
};
