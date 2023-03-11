'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Xe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Xe.hasMany(models.Chuyenxe, { foreignKey: 'xeId' });
      Xe.hasMany(models.Hinhanhxe, { foreignKey: 'xeId' });


    }
  }
  Xe.init({
    sl_ghe: DataTypes.INTEGER,
    bsx: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Xe',
  });
  return Xe;
};