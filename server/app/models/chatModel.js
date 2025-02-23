import { model, Schema } from "mongoose"

const chatSchema = new Schema({
  user_id: { type: String, required: true },
  history: [
  {
    user: {type: String, required: true},
    model: {type: String, required: true},
    timestamp: {type: Date, default: Date.now}
  }
]
  }, 
    {timestamps: true }
);

const Chat = model('Chat', chatSchema);

export default Chat;