"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        const items = [
            { tenthanhpho: "TP Hồ Chí Minh", diemdons: "HCM1,HCM2,HCM3" },
            { tenthanhpho: "TP Hà Nội", diemdons: "HN1,HN2,HN3" },
            { tenthanhpho: "TP Đà Nẵng", diemdons: "DN1,DN2,DN3" },
            { tenthanhpho: "TP Cà Mau", diemdons: "CM1,CM2,CM3" },
        ];
        items.forEach((item) => {
            item.createdAt = Sequelize.literal("NOW()");
            item.updatedAt = Sequelize.literal("NOW()");
        });
        await queryInterface.bulkInsert("Thanhphos", items, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("Thanhphos", items, {});
    },
};