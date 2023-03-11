"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Chuyenxe extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Chuyenxe.hasMany(models.Phieuxe, { foreignKey: "chuyenxeId" });
            Chuyenxe.hasMany(models.CT_Chuyenxe, { foreignKey: "chuyenxeId" });
            Chuyenxe.belongsTo(models.Xe, { foreignKey: "xeId" });
            Chuyenxe.belongsTo(models.Nhaxe, { foreignKey: "nhaxeId" });

            Chuyenxe.hasMany(models.Thanhpho, { foreignKey: "thanhphodiId" });
            Chuyenxe.hasMany(models.Thanhpho, { foreignKey: "thanhphodenId" });
        }
    }

    Chuyenxe.init({
        motachinhsach: DataTypes.STRING,
        src: DataTypes.STRING,
        type: DataTypes.STRING,
        checked: DataTypes.STRING,
        giave: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "Chuyenxe",
    });
    return Chuyenxe;
};