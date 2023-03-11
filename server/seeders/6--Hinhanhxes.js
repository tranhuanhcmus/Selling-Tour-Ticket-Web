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
        "src": "1.jpg",
        "xeId": "1"
      }, {
        "src": "2.jpg",
        "xeId": "2"
      }, {
        "src": "3.jpg",
        "xeId": "3"
      }, {
        "src": "4.jpg",
        "xeId": "4"
      }, {
        "src": "5.jpg",
        "xeId": "5"
      }, {
        "src": "6.jpg",
        "xeId": "6"
      }, {
        "src": "7.jpg",
        "xeId": "7"
      }, {
        "src": "8.jpg",
        "xeId": "8"
      }, {
        "src": "9.jpg",
        "xeId": "9"
      }, {
        "src": "10.jpg",
        "xeId": "10"
      },];

    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Hinhanhxes', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Hinhanhxes', items, {});
  }
};
