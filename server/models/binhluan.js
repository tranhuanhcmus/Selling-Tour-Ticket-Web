'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Binhluan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // cái này là trả lời bình luận của người đã bình luận nếu muốn, còn không thì để chắc nó vẫn chạy
      Binhluan.belongsTo(models.Binhluan, { foreignKey: 'traloibinhluanId' });
      Binhluan.belongsTo(models.Chuyenxe, { foreignKey: 'chuyenxeId' });

    }
  }
  Binhluan.init({
    noidung: DataTypes.STRING,
    ten: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Binhluan',
  });
  return Binhluan;
};