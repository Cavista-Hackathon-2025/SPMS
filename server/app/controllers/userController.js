import bcrypt from "bcryptjs"
import Response from "../domain/Response.js"
import UserRepository from "../models/repository/userRepository.js"
import HttpStatus from "../utils/http.js"

export const createUser = async (data) => {
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

  // chacks if email Exists
  const emailCheck = await UserRepository.readUserByEmail(filteredData.email)
  if(emailCheck) {
    const message = "Email Exists!!!"
    const httpStatus = HttpStatus.BAD_REQUEST.status
    const httpCode = HttpStatus.BAD_REQUEST.code
    return new Response(httpCode, httpStatus, message, {})
  }
  
  // If email Doesn't Exist create A Medical Practicioner
  const createUser = await UserRepository.createUserData(filteredData)
  const message = "Medical Practicioner Created Successfully !!!"
  const httpStatus = HttpStatus.CREATED.status
  const httpCode = HttpStatus.CREATED.code
  return new Response(httpCode, httpStatus, message, createUser )
}

export const loginUser = async (data) => {
  // Filtering Checks
  const filteredData = {
    email: data?.email,
    password: data?.password
  }
  
  //Checks if the user Exists by Email
  const emailCheck = await UserRepository.readUserByEmail(filteredData.email)
  if(!emailCheck) {
    const message = "Email doesn't Exists. Please signUp !!!"
    const httpStatus = HttpStatus.BAD_REQUEST.status
    const httpCode = HttpStatus.BAD_REQUEST.code
    return new Response(httpCode, httpStatus, message, {})
  }
  
  // Decodes Password
  const passwordCheck = await bcrypt.compare(filteredData.password, emailCheck.password)
  if(!passwordCheck) {
    const message = "Incorrect Password !!!"
    const httpStatus = HttpStatus.BAD_REQUEST.status
    const httpCode = HttpStatus.BAD_REQUEST.code
    return new Response(httpCode, httpStatus, message, {})
  }
  console.log("Password Check: ",passwordCheck)
  const message = "Login Successfully !!!"
  const httpStatus = HttpStatus.OK.status
  const httpCode = HttpStatus.OK.code
  return new Response(httpCode, httpStatus, message, emailCheck )
}

