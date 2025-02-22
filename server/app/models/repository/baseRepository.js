import HttpStatus from './../../utils/http.js';
import CustomError from './../../utils/error.js';
import schoolLogger from './../../utils/logTracker.js';
import errorHelper from '../../helpers/errorHelpers.js';
/**
 * IMPORTING SEQUELIZE FOR CRUD OPERATIONS
 *
 */

export default class BaseRepository {
  constructor(model) {
    this.model = model;
    this.check = 'active';
  }

  validateDataCheck(data) {
    if (!data || Object.keys(data).length === 0) {
      throw new Error('No data provided');
    }
  }

  //Create a User
  async create(data) {
    console.log(data)
    this.validateDataCheck(data);
    try {
      return await this.model.create(data);
    } catch (err) {
      schoolLogger.log(
        'error',
        JSON.stringify(errorHelper.returnErrorLog(err))
      );
      throw new CustomError(
        'Could not create model',
        HttpStatus.INTERNAL_SERVER_ERROR.code,
        HttpStatus.INTERNAL_SERVER_ERROR.status
      );
    }
  }

  // //Read user data
  async readOneById(id) {
    try {
      const findOne = await this.model.findOne({
        where: {
          id: id,
        },
      });
      return findOne;
    } catch (err) {
      schoolLogger.log(
        'error',
        JSON.stringify(errorHelper.returnErrorLog(err))
      );
      throw new CustomError(
        "User not found",
        HttpStatus.INTERNAL_SERVER_ERROR.code,
        HttpStatus.INTERNAL_SERVER_ERROR.status
      );
    }
  }

  async readOneByEmail(email) {
    try {
      const findOne = this.model.findOne({
        where: {
          email: email,
        },
      });
      return findOne;
    } catch (err) {
      schoolLogger.log(
        'error',
        JSON.stringify(errorHelper.returnErrorLog(err))
      );
      throw new CustomError(
        "Couldn't fetch model",
        HttpStatus.INTERNAL_SERVER_ERROR.code,
        HttpStatus.INTERNAL_SERVER_ERROR.status
      );
    }
  }

  async readAll() {
    try {
      return await this.model.findAll();
    } catch (err) {
      schoolLogger.log(
        'error',
        JSON.stringify(errorHelper.returnErrorLog(err))
      );
      throw new CustomError(
        "Couldn't fetch models",
        HttpStatus.INTERNAL_SERVER_ERROR.code,
        HttpStatus.INTERNAL_SERVER_ERROR.status
      );
    }
  }

  // Update user data
  async updateModel(id, data) {
    //Handle no data
    this.validateDataCheck(data);
    try {
      console.log(id, data)
      const model = await this.readOneById(id);
      await model.update(data);
      await model.reload()
      return model;
    } catch (err) {
      schoolLogger.log(
        'error',
        JSON.stringify(errorHelper.returnErrorLog(err))
      );
      throw new CustomError(
        'Could not update model',
        HttpStatus.INTERNAL_SERVER_ERROR.code,
        HttpStatus.INTERNAL_SERVER_ERROR.status
      );
    }
  }

  // Delete user data
  async deleteModel(id) {
    try {
      await this.model.destroy({
        where: {
          id: id,
        },
      });
      return 'Success';
    } catch (err) {
      schoolLogger.log(
        'error',
        JSON.stringify(errorHelper.returnErrorLog(err))
      );
      throw new CustomError(
        'Could not delete model',
        HttpStatus.INTERNAL_SERVER_ERROR.code,
        HttpStatus.INTERNAL_SERVER_ERROR.status
      );
    }
  }
}
