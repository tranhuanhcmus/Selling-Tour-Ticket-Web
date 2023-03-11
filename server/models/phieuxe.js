"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Phieuxe extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Phieuxe.belongsTo(models.Khachhang, { foreignKey: "khachhangId" });
            Phieuxe.hasMany(models.CT_Phieuxe, { foreignKey: "phieuxeId" });
        }
    }
    Phieuxe.init({
        soluong: DataTypes.STRING,
        tongtien: DataTypes.STRING,
        diemdon: DataTypes.STRING,
        diemtra: DataTypes.STRING,
        trangthai: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "Phieuxe",
    });
    return Phieuxe;
};