import { MongooseModuleOptions } from "@nestjs/mongoose";

export const uri = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`;
export const options: MongooseModuleOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASS,
};
