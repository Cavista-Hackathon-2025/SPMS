import sequelize from "../utils/sequelize.js";
import { Model, DataTypes } from "sequelize";

class MedicalPractitioner extends Model {}

MedicalPractitioner.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  mobile_no: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  profile_pic: {
    type: DataTypes.STRING,
    allowNull: true,
  }
},
  {
    sequelize,
    modelName: "medicalpractitioner",
  }
);

MedicalPractitioner.sync();
export default MedicalPractitioner;