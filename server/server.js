import express from 'express'
import { config } from 'dotenv'

config()
const app = express()
const PORT = process.env.PORT

app.listen(3000, () => {
  console.log("Server Started on PORT:", PORT)
})