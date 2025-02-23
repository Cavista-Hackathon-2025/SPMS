import { GoogleGenerativeAI } from "@google/generative-ai";
import Chat from "./../models/chatModel.js";
import {config} from 'dotenv'

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

export default class AiClass {
  constructor(userId, chatId, userMessage) {
    this.userId = userId
    this.chatId = chatId
    this.userMessage = userMessage
  }

  async initializeAiChat() {
    if (this.chatId) {
      return await this.storeAiChat()
    }
    // console.log(this.userId, this.chatId, this.userMessage)
    return await this.createAiChat()
  }

  async storeAiChat() {
    const genAI = new GoogleGenerativeAI(CONFIG_KEY);
    // Set the system instruction during model initialization
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: healthPredictionPrompt,
    });
    // Fetch chat history from the database
    const chatHistory = await this.getChatHistory(this.userId, this.chatId);
      
    // Initialize the chat with the fetched history
    const chat = model.startChat({
      history: chatHistory.map(entry => ({
        role: entry.user ? 'user' : 'model',
        parts: [{ text: entry.user || entry.model }],
      })),
    });
    
    const result = await chat.sendMessage(this.userMessage);
    const createChats = await Chat.findOneAndUpdate(
      { user_id: this.userId, _id: this.chatId },
      { $push: { history: { user: this.userMessage, model: result.response.text() } } },
      { upsert: true, new: true }
    );
    return createChats;
  }

  async createAiChat() {
    const genAI = new GoogleGenerativeAI(CONFIG_KEY);
    // Set the system instruction during model initialization
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: counscellingPrompt,
    });
    // Initialize the chat with the fetched history
    const chat = model.startChat({});
    
    const result = await chat.sendMessage(this.userMessage);
    // console.log("Create Ai Chat:", this.userMessage, result.response.text())
    const createChats = await Chat.create({
      user_id: this.userId,
      chat_name: this.userMessage,
      history: [{ user: this.userMessage, model: result.response.text() }]
    });
    console.log(createChats)
    return createChats;
  }

  async getChatHistory () {
    const chat = await Chat.findOne({ user_id: this.userId, _id: this.chatId });
    if (!chat) {
      return [];
    }
    return chat.history;
  };
}