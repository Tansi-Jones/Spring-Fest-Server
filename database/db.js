import Mongoose from "mongoose";

// Connection from out Database cloud. Mongo-DB ATlas
export default async function connectDB() {
  try {
    Mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // console.log(`MongoDB Connected: ${conn.connection.host}`); \
    // removed .cyan.underline from this line
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
