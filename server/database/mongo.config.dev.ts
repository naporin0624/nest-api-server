import { MongooseModuleOptions } from "@nestjs/mongoose";

export const uri = "mongodb://localhost:27017/admin";
export const options: MongooseModuleOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "nestApiDevelopment",
  user: "root",
  pass: "example",
};
