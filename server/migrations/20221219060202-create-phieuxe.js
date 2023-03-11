"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Phieuxes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            soluong: {
                type: Sequelize.STRING,
            },
            diemdon: {
                type: Sequelize.STRING,
            },
            diemtra: {
                type: Sequelize.STRING,
            },
            tongtien: {
                type: Sequelize.INTEGER,
            },
            tinhtrang: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Phieuxes");
    },
};