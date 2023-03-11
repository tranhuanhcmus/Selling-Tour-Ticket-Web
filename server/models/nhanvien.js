'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nhanvien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Nhanvien.belongsTo(models.Role, { foreignKey: 'nhanvienId' });

    }
  }
  Nhanvien.init({
    luong: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    ngayvl: DataTypes.DATE,
    role: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    accesstoken: DataTypes.STRING,
    email: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Nhanvien',
  });
  return Nhanvien;
};