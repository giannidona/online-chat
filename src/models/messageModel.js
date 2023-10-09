import mongoose, { mongo } from "mongoose";

const messageCollection = "message";

const messageSchema = new mongoose.Schema({
  message: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  timestamp: Date,
});

const messageModel = mongoose.model(messageCollection, messageSchema);
export { messageModel };
