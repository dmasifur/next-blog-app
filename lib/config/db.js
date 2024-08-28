import mongoose from "mongoose";
require("dotenv").config();
const mongoURI = process.env.MONGO_URI;

export const ConnectDb = async () => {
  await mongoose.connect(`${mongoURI}`);
  console.log("DB connected.");
};
