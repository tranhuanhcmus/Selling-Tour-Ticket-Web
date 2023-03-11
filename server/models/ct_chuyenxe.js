'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CT_Chuyenxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CT_Chuyenxe.belongsTo(models.Chuyenxe, { foreignKey: 'chuyenxeId' });
    }
  }
  CT_Chuyenxe.init({
    tgkhoihanh: DataTypes.TIME,
    tgketthuc: DataTypes.TIME,
    ngaykhoihanh: DataTypes.DATE,
    stt: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CT_Chuyenxe',
  });
  return CT_Chuyenxe;
};