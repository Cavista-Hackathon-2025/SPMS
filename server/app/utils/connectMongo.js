import mongoose from "mongoose";

const connectDB = async(DATABASE_URL) => {
  try {
    const con = await mongoose.connect(DATABASE_URL)
    console.log('Database Connected...', con)
  } catch (err) {
    console.log(err)
  }
}

export default connectDB;