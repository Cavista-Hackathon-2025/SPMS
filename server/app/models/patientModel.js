import sequelize from "../utils/sequelize.js";
import { Model, DataTypes } from "sequelize";
import { ulid } from "ulid";

class Patient extends Model {}

Patient.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  patientId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  mobile_no: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
  {
    sequelize,
    modelName: "patient",
  }
);

Patient.sync();
export default Patient;