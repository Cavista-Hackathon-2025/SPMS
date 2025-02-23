import express from "express";
import { config } from "dotenv";
import logger from "./app/utils/logger.js";
import userRoute from "./app/routes/userRoute.js";
import patientRoute from "./app/routes/patientRoute.js";
import ip from "ip";
import errorHandler from "./app/routes/middlewares/errorMiddleware.js";
import connectDB from "./app/utils/connectMongo.js";

import Chat from "./app/models/chatModel.js";
import Patient from "./app/models/patientModel.js";
import MedicalPractitioner from "./app/models/userModel.js";

config();
const app = express();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL
connectDB(DATABASE_URL)

app.use(express.json());

// Medical Practitioner Routes
app.use("/api/v1/", userRoute);

// Patient Routes
app.use("/patient", patientRoute);

app.get("/", (req, res) => {
  // console.log(req.body)
  res.status(200).send("Server Working Perfectly!!!");
});

app.use(errorHandler);
app.listen(3000, () => {
  logger.info(`Server started on http://${ip.address()}:${PORT}`);
});
