'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hinhanhxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hinhanhxe.belongsTo(models.Xe, { foreignKey: 'xeId' });
    }
  }
  Hinhanhxe.init({
    src: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hinhanhxe',
  });
  return Hinhanhxe;
};