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
    type: DataTypes.STRING(26),
    allowNull: false,
    defaultValue: () => ulid()
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
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
},
  {
    sequelize,
    modelName: "patient",
  }
);

Patient.sync();
export default Patient;