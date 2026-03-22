import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const contdb = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("MONGODB CONNECTED:", contdb.connection.host);
  } catch (error) {
    console.error("ERROR CONNECTION TO MONGODB", error);
    process.exit(1);
  }
};

export default connectDB;
