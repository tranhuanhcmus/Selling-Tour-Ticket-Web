'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Benxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Benxe.belongsToMany(models.Nhaxe, {
        through: 'CT_BenXe_NhaXe',
        foreignKey: 'benxeId'
      })
      Benxe.belongsTo(models.Thanhpho, { foreignKey: 'thanhphoId' });
    }
  }
  Benxe.init({
    tenbenxe: DataTypes.STRING,
    sdth: DataTypes.STRING,
    diachi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Benxe',
  });
  return Benxe;
};