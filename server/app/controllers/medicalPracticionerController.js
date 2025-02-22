import Response from "../domain/Response.js"
import MedicalPractitionerRepository from "../models/repository/medicalPractitionerRepository.js"
import HttpStatus from "../utils/http.js"

export const createMedicalPractitioner = async (data) => {
  console.log(data)
  const filteredData = {
    email: data?.email,
    firstname: data?.firstname,
    lastname: data?.lastname,
    mobile_no: data?.mobile_no,
    password: data?.password,
    country: data?.country,
    profile_pic: data?.profile_pic
  }
  // Medical Practicioner Instance
  const createUser = await MedicalPractitionerRepository.createMedicalPractitionerData(filteredData)
  const message = "Medical Practicioner Created Successfully !!!"
  const httpStatus = HttpStatus.CREATED.status
  const httpCode = HttpStatus.CREATED.code
  return new Response(httpCode, httpStatus, message, createUser )
}

const loginMedicalPractitioner = (data) => {

}

