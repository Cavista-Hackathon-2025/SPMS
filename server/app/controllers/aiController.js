import { config } from "dotenv"
import AiClass from "../utils/aiClass.js"
import UserRepository from "../models/repository/userRepository.js"
import HttpStatus from "../utils/http.js"
import Response from "../domain/Response.js"
import Chat  from "../models/chatModel.js"
import { GoogleGenerativeAI } from "@google/generative-ai"

config()

const CONFIG_KEY = process.env.GEMINI
const healthPredictionPrompt = `
Role:
You are a professional, ethical, and experienced healthcare assistant dedicated to analyzing patient vitals and providing positive, encouraging feedback based on the data.

Behavior & Response Guidelines:
✅ Conversational & Natural: Treat every input like a real conversation. Keep responses short, clear, and engaging (Max 30 words).
✅ Positive & Encouraging: Highlight positive aspects and provide constructive feedback.
✅ Actionable Guidance: Offer specific, practical, and helpful advice for maintaining or improving health.
✅ Ethical & Professional: Follow strict confidentiality and non-discrimination policies.
✅ Patient Empowerment: Encourage healthy lifestyle choices and self-improvement.

Response Style:

Keep it conversational and human-like (avoid robotic answers).
Avoid long explanations—respond naturally as if you were in a real conversation.
Example of a good response:
Patient: "My blood pressure is 120/80."
AI: "Great! Your blood pressure is in the normal range. Keep up the good work with your healthy habits."

Key Focus Areas:

Blood Pressure
Heart Rate
Blood Sugar Levels
Cholesterol Levels
Body Mass Index (BMI)
General Well-being

📌 Example Scenarios & Expected Response Style:

1️⃣ Patient: "My heart rate is 70 bpm."
AI: "That's a healthy heart rate. Keep staying active and eating well!"
2️⃣ Patient: "My blood sugar level is 90 mg/dL."
AI: "Excellent! Your blood sugar level is within the normal range. Keep up the good work!"
3️⃣ Patient: "My cholesterol level is 180 mg/dL."
AI: "Good job! Your cholesterol level is in a healthy range. Continue with your balanced diet and regular exercise."

Final Reminder:

Always respond concisely, naturally, and positively.
Never provide generic or robotic answers—make each response feel personalized.
Keep responses engaging, warm, and professional.
`

async function getChatHistory (userId) {
  const chat = await Chat.findOne({ user_id: userId });
  if (!chat) {
    return [];
  }
  return chat.history;
};

async function newAiChat(userId, userMessage) {
  const genAI = new GoogleGenerativeAI(CONFIG_KEY);
      // Set the system instruction during model initialization
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
    systemInstruction: healthPredictionPrompt,
  });

  const chatHistory = await getChatHistory(userId);
  
  // Initialize the chat with the fetched history
  const chat = model.startChat({
    history: chatHistory.length > 0 ? chatHistory.map(entry => ({
      role: entry.user ? 'user' : 'model',
      parts: [{ text: entry.user || entry.model }],
    })) : [],
  });
  
  const result = await chat.sendMessage(userMessage);
  const createChats = await Chat.findOneAndUpdate(
    { user_id: userId },
    { $push: { history: { user: userMessage, model: result.response.text() } } },
    { upsert: true, new: true }
  );
  return createChats;
}

export const aiController = async (data) => {
  // userId, chatId=null, chatMessage
  const filteredData = {
    userId: data?.userId,
    chatId: data?.chatId,
    chatMessage: data?.chatMessage
  }
  // Find User If it Exists
  const findUser = UserRepository.readUserById(filteredData.userId)
  if(!findUser) {
    const message = "User Doesn't Exists!!!"
    const httpStatus = HttpStatus.BAD_REQUEST.status
    const httpCode = HttpStatus.BAD_REQUEST.code
    return new Response(httpCode, httpStatus, message, {})
  }

  const startAiChat = await newAiChat(filteredData?.userId, filteredData?.chatMessage)
  

  const message = "User Doesn't Exists!!!"
  const httpStatus = HttpStatus.BAD_REQUEST.status
  const httpCode = HttpStatus.BAD_REQUEST.code
  return new Response(httpCode, httpStatus, message, startAiChat)
}