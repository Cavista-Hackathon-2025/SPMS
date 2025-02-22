import express from 'express'
import tryCatch from '../utils/tryCatch.js'
import { createMedicalPractitioner } from '../controllers/medicalPracticionerController.js'

const router = express.Router()
// router.use(express.json())

router.post('/register', 
  tryCatch(async (req, res) => {
  console.log(req.body)
  const registerMedicalPracticioner = await createMedicalPractitioner(req.body)
  res.status(registerMedicalPracticioner.statusCode).send(registerMedicalPracticioner)
}))

router.get('/login', (req, res) => {

})

export default router;