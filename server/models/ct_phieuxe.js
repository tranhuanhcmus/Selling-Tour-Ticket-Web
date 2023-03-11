'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CT_Phieuxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CT_Phieuxe.belongsTo(models.Phieuxe, { foreignKey: 'phieuxeId' });
      CT_Phieuxe.belongsTo(models.Chuyenxe, { foreignKey: 'chuyenxeId' });

    }
  }
  CT_Phieuxe.init({
    soghe: DataTypes.INTEGER,
    sotang: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CT_Phieuxe',
  });
  return CT_Phieuxe;
};