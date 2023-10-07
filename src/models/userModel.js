import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const userModel = mongoose.model(userCollection, userSchema);
export { userModel };
