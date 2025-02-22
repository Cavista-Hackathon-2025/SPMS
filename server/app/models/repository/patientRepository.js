import BaseRepository from './baseRepository.js';
import patientModel from './../patientModel.js'

export default class PatientRepository {

  // Get user Repository
  static getBaseRepository() {
    return new BaseRepository(patientModel);
  }

  //Create a User
  static async createPatientData(data) {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.create(data);
  }

  //Read user Data by Id
  static async readPatientById(id) {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.readOneById(id);
  }

  // Read user Data by Email
  static async readPatientByEmail(email) {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.readOneByEmail(email);
  }

  // Read all user Data
  static async readAllPatient() {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.readAll();
  }

  // Update user data
  static async updatePatient(id, data) {
    const baseRepository = this.getBaseRepository();
    const newData = await this.encryptDataPassword(data);
    return await baseRepository.updateModel(id, newData);
  }
  
  // Delete user data
  static async deletePatient(id) {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.deleteModel(id);
  }
}
