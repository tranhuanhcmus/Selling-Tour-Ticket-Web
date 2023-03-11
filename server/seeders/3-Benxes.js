'use strict';

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
    const items =
      [{
        "tenbenxe": "Bến xe Cà Mau",
        "sdth": "907-522-0777",
        "diachi": "76 Manitowish Circle",
        "thanhphoId": 4
      }, {
        "tenbenxe": "Bến xe Miền Tây",
        "sdth": "907-542-2790",
        "diachi": "60063 Mallory Park",
        "thanhphoId": 1
      }, {
        "tenbenxe": "Bến xe Đà Nẵng ",
        "sdth": "907-486-2784",
        "diachi": "485 Truax Center",
        "thanhphoId": 3
      }, {
        "tenbenxe": "Bến xe Hà Nội",
        "sdth": "907-690-2865",
        "diachi": "9487 Sutherland Circle",
        "thanhphoId": 2
      }, {
        "tenbenxe": "Bến xe Miền Đông",
        "sdth": "907-754-8978",
        "diachi": "5762 Scofield Hill",
        "thanhphoId": 1
      }, {
        "tenbenxe": "Bến xe Mĩ Đình ",
        "sdth": "907-321-4644",
        "diachi": "09 Arizona Hill",
        "thanhphoId": 2
      }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Benxes', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Benxes', items, {});
  }
};
