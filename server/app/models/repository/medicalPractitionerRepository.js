import bcrypt from 'bcryptjs';
import BaseRepository from './baseRepository.js';
import medicalPractitionerModel from './../medicalPractitionerModel.js'

export default class MedicalPractitionerRepository {
  static async encryptDataPassword(data) {
    if (data?.password) {
      data.password = await bcrypt.hash(data?.password, 10);
    }
    return data;
  }

  // Get user Repository
  static getBaseRepository() {
    return new BaseRepository(medicalPractitionerModel);
  }

  //Create a User
  static async createMedicalPractitionerData(data) {
    const baseRepository = this.getBaseRepository();
    const newData = await this.encryptDataPassword(data);
    return await baseRepository.create(newData);
  }

  //Read user Data by Id
  static async readMedicalPractitionerById(id) {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.readOneById(id);
  }

  // Read user Data by Email
  static async readMedicalPractitionerByEmail(email) {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.readOneByEmail(email);
  }

  // Read all user Data
  static async readAllMedicalPractitioner() {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.readAll();
  }

  // Update user data
  static async updateMedicalPractitioner(id, data) {
    const baseRepository = this.getBaseRepository();
    const newData = await this.encryptDataPassword(data);
    return await baseRepository.updateModel(id, newData);
  }
  
  // Delete user data
  static async deleteMedicalPractitioner(id) {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.deleteModel(id);
  }
}
