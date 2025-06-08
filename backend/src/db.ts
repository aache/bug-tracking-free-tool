// db.ts
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongod: MongoMemoryServer;

export const connectInMemoryDB = async () => {
  mongod = await MongoMemoryServer.create({
    instance: {
      port: 27017, // <--- Fixed port
    },
  });
  const uri = mongod.getUri();
  await mongoose.connect(uri);
  console.log("In-memory MongoDB connected");
};

export const closeInMemoryDB = async () => {
  await mongoose.disconnect();
  await mongod.stop();
};
