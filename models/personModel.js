import Mongoose from "mongoose";

const { Schema } = Mongoose;

const personSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      trim: true,
      required: false,
      lowercase: true,
    },
    language: {
      type: String,
      trim: true,
      required: false,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export default Mongoose.model("Person", personSchema);
