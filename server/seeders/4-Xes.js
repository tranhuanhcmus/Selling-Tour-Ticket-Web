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
     * 
    */
    const items =
      [{
        "sl_ghe": 59,
        "bsx": "1FTSW2B57AE258545"
      }, {
        "sl_ghe": 59,
        "bsx": "2T1BURHE9FC691450"
      }, {
        "sl_ghe": 51,
        "bsx": "WAUDT74F55N870785"
      }, {
        "sl_ghe": 40,
        "bsx": "2HNYD18734H155040"
      }, {
        "sl_ghe": 54,
        "bsx": "3GYFNGE30ES781622"
      }, {
        "sl_ghe": 57,
        "bsx": "2HNYD18835H492253"
      }, {
        "sl_ghe": 56,
        "bsx": "JH4CL95956C596759"
      }, {
        "sl_ghe": 51,
        "bsx": "SALSF2D49BA415131"
      }, {
        "sl_ghe": 40,
        "bsx": "NM0AS8F7XE1011071"
      }, {
        "sl_ghe": 40,
        "bsx": "2C3CCARG1FH156454"
      }];

    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Xes', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Xes', items, {});
  }
};
