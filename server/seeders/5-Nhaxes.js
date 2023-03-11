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
        "tennhaxe": "Nhà xe Thành Bưởi",
        "sdth": "09121221",
        "hinhanh": "xe_thanh_buoi.jpg",
      }, {
        "tennhaxe": "Nhà xe Phương Trang",
        "sdth": "09121221",
        "hinhanh": "xe_phuong_trang.jpg",
      }, {
        "tennhaxe": "Nhà xe Phương Tân Niên",
        "sdth": "09121221",
        "hinhanh": "xe_tan_nien.jpg",
      }, {
        "tennhaxe": "Nhà xe Tuấn Hưng",
        "sdth": "09121221",
        "hinhanh": "xe_tuan_hung.jpg",
      }];

    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Nhaxes', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Nhaxes', items, {});
  }

};
