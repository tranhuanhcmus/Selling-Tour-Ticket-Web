"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Thanhpho extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Thanhpho.hasMany(models.Chuyenxe, { foreignKey: "thanhphodiId" });
            Thanhpho.hasMany(models.Chuyenxe, { foreignKey: "thanhphodenId" });
            Thanhpho.hasMany(models.Benxe, { foreignKey: "thanhphoId" });
        }
    }
    Thanhpho.init({
        tenthanhpho: DataTypes.STRING,
        diemdons: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "Thanhpho",
    });
    return Thanhpho;
};