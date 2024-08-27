import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://asifur_db:46wMnmNNHYonhAzy@blogapp.xjrvq.mongodb.net/blog-app"
  );
  console.log("DB connected.");
};
