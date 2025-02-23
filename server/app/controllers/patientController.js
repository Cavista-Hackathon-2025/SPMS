import Response from "../domain/Response.js"
import PatientRepository from "../models/repository/patientRepository.js"
import HttpStatus from "../utils/http.js"
import Utility from './../utils/utility.js'

export const createPatientData = async (data) => {
  console.log(data)
  const filteredData = {
    firstname: data?.firstname,
    lastname: data?.lastname,
    age: data?.age,
    mobile_no: data?.mobile_no,
    patientId: await Utility.codeGen()
  }

  // Create Patient Data
  const createPatient = await PatientRepository.createPatientData(filteredData)
  const message = "Incorrect Password !!!"
  const httpStatus = HttpStatus.BAD_REQUEST.status
  const httpCode = HttpStatus.BAD_REQUEST.code
  return new Response(httpCode, httpStatus, message, createPatient)
} 

const readPatientData = () => {

}

const readAllPatientData = () => {
  
}