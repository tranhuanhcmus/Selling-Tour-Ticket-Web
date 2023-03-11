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
    const items = [{
      "soghe": 13,
      "sotang": "A",
      "phieuxeId": 10,
      "chuyenxeId": 11
    }, {
      "soghe": 5,
      "sotang": "B",
      "phieuxeId": 26,
      "chuyenxeId": 3
    }, {
      "soghe": 39,
      "sotang": "A",
      "phieuxeId": 28,
      "chuyenxeId": 10
    }, {
      "soghe": 23,
      "sotang": "B",
      "phieuxeId": 26,
      "chuyenxeId": 8
    }, {
      "soghe": 16,
      "sotang": "A",
      "phieuxeId": 29,
      "chuyenxeId": 1
    }, {
      "soghe": 39,
      "sotang": "B",
      "phieuxeId": 10,
      "chuyenxeId": 9
    }, {
      "soghe": 27,
      "sotang": "A",
      "phieuxeId": 8,
      "chuyenxeId": 6
    }, {
      "soghe": 23,
      "sotang": "A",
      "phieuxeId": 15,
      "chuyenxeId": 15
    }, {
      "soghe": 30,
      "sotang": "A",
      "phieuxeId": 2,
      "chuyenxeId": 14
    }, {
      "soghe": 4,
      "sotang": "A",
      "phieuxeId": 4,
      "chuyenxeId": 3
    }, {
      "soghe": 8,
      "sotang": "A",
      "phieuxeId": 15,
      "chuyenxeId": 9
    }, {
      "soghe": 26,
      "sotang": "A",
      "phieuxeId": 23,
      "chuyenxeId": 15
    }, {
      "soghe": 1,
      "sotang": "B",
      "phieuxeId": 22,
      "chuyenxeId": 3
    }, {
      "soghe": 18,
      "sotang": "B",
      "phieuxeId": 3,
      "chuyenxeId": 9
    }, {
      "soghe": 29,
      "sotang": "B",
      "phieuxeId": 27,
      "chuyenxeId": 10
    }, {
      "soghe": 13,
      "sotang": "B",
      "phieuxeId": 27,
      "chuyenxeId": 20
    }, {
      "soghe": 12,
      "sotang": "A",
      "phieuxeId": 21,
      "chuyenxeId": 2
    }, {
      "soghe": 17,
      "sotang": "B",
      "phieuxeId": 4,
      "chuyenxeId": 13
    }, {
      "soghe": 33,
      "sotang": "A",
      "phieuxeId": 6,
      "chuyenxeId": 10
    }, {
      "soghe": 11,
      "sotang": "B",
      "phieuxeId": 15,
      "chuyenxeId": 20
    }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('CT_Phieuxes', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('CT_Phieuxes', items, {});
  }
};

