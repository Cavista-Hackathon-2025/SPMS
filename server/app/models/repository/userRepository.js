import bcrypt from "bcryptjs";
import BaseRepository from "./baseRepository.js";
import userModel from "../userModel.js";

export default class UserRepository {
  static async encryptDataPassword(data) {
    if (data?.password) {
      data.password = await bcrypt.hash(data?.password, 10);
    }
    return data;
  }

  // Get user Repository
  static getBaseRepository() {
    return new BaseRepository(userModel);
  }

  //Create a User
  static async createUserData(data) {
    const baseRepository = this.getBaseRepository();
    const newData = await this.encryptDataPassword(data);
    return await baseRepository.create(newData);
  }

  //Read user Data by Id
  static async readUserById(id) {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.readOneById(id);
  }

  // Read user Data by Email
  static async readUserByEmail(email) {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.readOneByEmail(email);
  }

  // Read all user Data
  static async readAllUser() {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.readAll();
  }

  // Update user data
  static async updateUser(id, data) {
    const baseRepository = this.getBaseRepository();
    const newData = await this.encryptDataPassword(data);
    return await baseRepository.updateModel(id, newData);
  }

  // Delete user data
  static async deleteUser(id) {
    const baseRepository = this.getBaseRepository();
    return await baseRepository.deleteModel(id);
  }
}
