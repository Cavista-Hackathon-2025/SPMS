import express from 'express'
import tryCatch from '../utils/tryCatch.js'
import { createUser, loginUser } from '../controllers/userController.js'
import { aiController } from '../controllers/aiController.js'
// import { createPatientData } from '../controllers/patientController.js'

const router = express.Router()
// router.use(express.json())

router.post('/register', 
  tryCatch(async (req, res) => {
  console.log(req.body)
  const registerUser = await createUser(req.body)
  res.status(registerUser.statusCode).send(registerUser)
}))

router.post('/login',
  tryCatch(async (req, res) => {
  console.log(req.body)
  const loginUsers = await loginUser(req.body)
  res.status(loginUsers.statusCode).send(loginUsers)
}))

router.post('/start', 
  tryCatch(async (req, res) => {
    console.log(req.body)
    const startChat = await aiController(req.body)
    res.status(startChat.statusCode).send(startChat)
  }))
// router.post('/patient/create',
//   tryCatch(async (req, res) => {
//   console.log(req.data)
//   const createPatientDatas = await createPatientData(req.body)
//   res.status(createPatientDatas.statusCode).send(createPatientDatas)
// }))

// router.get('/patient',
//   tryCatch(async (req, res) => {
//     console.log(req.data)
//     const createPatientDatas = await createPatientData(req.body)
//     res.status(createPatientDatas.statusCode).send(createPatientDatas)
//   }))



export default router;