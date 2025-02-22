import express from 'express'
import tryCatch from '../utils/tryCatch.js'
import { createMedicalPractitioner, loginMedicalPractitioner } from '../controllers/medicalPracticionerController.js'

const router = express.Router()
// router.use(express.json())

router.post('/register', 
  tryCatch(async (req, res) => {
  console.log(req.body)
  const registerMedicalPracticioners = await createMedicalPractitioner(req.body)
  res.status(registerMedicalPracticioners.statusCode).send(registerMedicalPracticioners)
}))

router.post('/login',
  tryCatch(async (req, res) => {
  console.log(req.body)
  const loginMedicalPractitioners = await loginMedicalPractitioner(req.body)
  res.status(loginMedicalPractitioners.statusCode).send(loginMedicalPractitioners)
}))

export default router;