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
      "tgkhoihanh": "7:21 AM",
      "tgketthuc": "11:07 PM",
      "ngaykhoihanh": "7/31/2022",
      "stt": 1,
      "chuyenxeId": 14
    }, {
      "tgkhoihanh": "2:27 PM",
      "tgketthuc": "3:42 AM",
      "ngaykhoihanh": "12/25/2022",
      "stt": 1,
      "chuyenxeId": 3
    }, {
      "tgkhoihanh": "6:59 PM",
      "tgketthuc": "11:44 PM",
      "ngaykhoihanh": "8/13/2022",
      "stt": 1,
      "chuyenxeId": 5
    }, {
      "tgkhoihanh": "4:00 AM",
      "tgketthuc": "5:01 PM",
      "ngaykhoihanh": "12/20/2022",
      "stt": 1,
      "chuyenxeId": 9
    }, {
      "tgkhoihanh": "9:25 PM",
      "tgketthuc": "7:54 AM",
      "ngaykhoihanh": "1/12/2022",
      "stt": 1,
      "chuyenxeId": 16
    }, {
      "tgkhoihanh": "1:43 PM",
      "tgketthuc": "7:50 AM",
      "ngaykhoihanh": "1/28/2022",
      "stt": 1,
      "chuyenxeId": 14
    }, {
      "tgkhoihanh": "5:23 AM",
      "tgketthuc": "1:15 AM",
      "ngaykhoihanh": "5/1/2022",
      "stt": 1,
      "chuyenxeId": 13
    }, {
      "tgkhoihanh": "7:43 PM",
      "tgketthuc": "5:43 PM",
      "ngaykhoihanh": "12/11/2022",
      "stt": 1,
      "chuyenxeId": 1
    }, {
      "tgkhoihanh": "9:29 AM",
      "tgketthuc": "11:58 AM",
      "ngaykhoihanh": "9/30/2022",
      "stt": 1,
      "chuyenxeId": 14
    }, {
      "tgkhoihanh": "2:46 PM",
      "tgketthuc": "5:40 PM",
      "ngaykhoihanh": "1/28/2022",
      "stt": 1,
      "chuyenxeId": 9
    }, {
      "tgkhoihanh": "12:42 PM",
      "tgketthuc": "1:37 PM",
      "ngaykhoihanh": "5/31/2022",
      "stt": 1,
      "chuyenxeId": 10
    }, {
      "tgkhoihanh": "8:41 PM",
      "tgketthuc": "2:23 PM",
      "ngaykhoihanh": "5/17/2022",
      "stt": 1,
      "chuyenxeId": 13
    }, {
      "tgkhoihanh": "8:40 PM",
      "tgketthuc": "5:57 AM",
      "ngaykhoihanh": "8/27/2022",
      "stt": 1,
      "chuyenxeId": 9
    }, {
      "tgkhoihanh": "10:42 AM",
      "tgketthuc": "11:55 AM",
      "ngaykhoihanh": "11/20/2022",
      "stt": 1,
      "chuyenxeId": 20
    }, {
      "tgkhoihanh": "8:46 PM",
      "tgketthuc": "11:06 AM",
      "ngaykhoihanh": "7/23/2022",
      "stt": 1,
      "chuyenxeId": 7
    }, {
      "tgkhoihanh": "6:21 AM",
      "tgketthuc": "12:15 AM",
      "ngaykhoihanh": "6/25/2022",
      "stt": 1,
      "chuyenxeId": 2
    }, {
      "tgkhoihanh": "4:14 PM",
      "tgketthuc": "8:49 PM",
      "ngaykhoihanh": "9/18/2022",
      "stt": 1,
      "chuyenxeId": 3
    }, {
      "tgkhoihanh": "12:09 PM",
      "tgketthuc": "4:28 PM",
      "ngaykhoihanh": "7/31/2022",
      "stt": 1,
      "chuyenxeId": 4
    }, {
      "tgkhoihanh": "11:09 AM",
      "tgketthuc": "10:54 PM",
      "ngaykhoihanh": "3/11/2022",
      "stt": 1,
      "chuyenxeId": 3
    }, {
      "tgkhoihanh": "4:21 AM",
      "tgketthuc": "8:35 PM",
      "ngaykhoihanh": "5/8/2022",
      "stt": 1,
      "chuyenxeId": 17
    }, {
      "tgkhoihanh": "9:17 AM",
      "tgketthuc": "10:26 AM",
      "ngaykhoihanh": "2/25/2022",
      "stt": 1,
      "chuyenxeId": 7
    }, {
      "tgkhoihanh": "5:54 AM",
      "tgketthuc": "1:49 PM",
      "ngaykhoihanh": "8/6/2022",
      "stt": 1,
      "chuyenxeId": 2
    }, {
      "tgkhoihanh": "7:15 AM",
      "tgketthuc": "2:00 AM",
      "ngaykhoihanh": "2/15/2022",
      "stt": 1,
      "chuyenxeId": 6
    }, {
      "tgkhoihanh": "12:19 PM",
      "tgketthuc": "5:14 PM",
      "ngaykhoihanh": "7/10/2022",
      "stt": 1,
      "chuyenxeId": 17
    }, {
      "tgkhoihanh": "5:53 AM",
      "tgketthuc": "3:40 PM",
      "ngaykhoihanh": "1/9/2022",
      "stt": 1,
      "chuyenxeId": 15
    }, {
      "tgkhoihanh": "5:31 AM",
      "tgketthuc": "9:05 AM",
      "ngaykhoihanh": "3/18/2022",
      "stt": 1,
      "chuyenxeId": 6
    }, {
      "tgkhoihanh": "3:30 PM",
      "tgketthuc": "5:25 AM",
      "ngaykhoihanh": "4/14/2022",
      "stt": 1,
      "chuyenxeId": 11
    }, {
      "tgkhoihanh": "9:03 AM",
      "tgketthuc": "1:18 PM",
      "ngaykhoihanh": "8/25/2022",
      "stt": 1,
      "chuyenxeId": 9
    }, {
      "tgkhoihanh": "6:38 AM",
      "tgketthuc": "1:10 AM",
      "ngaykhoihanh": "3/8/2022",
      "stt": 1,
      "chuyenxeId": 5
    }, {
      "tgkhoihanh": "1:00 AM",
      "tgketthuc": "7:24 AM",
      "ngaykhoihanh": "10/18/2022",
      "stt": 1,
      "chuyenxeId": 16
    }, {
      "tgkhoihanh": "12:16 AM",
      "tgketthuc": "11:37 AM",
      "ngaykhoihanh": "12/10/2022",
      "stt": 1,
      "chuyenxeId": 9
    }, {
      "tgkhoihanh": "10:32 PM",
      "tgketthuc": "9:15 AM",
      "ngaykhoihanh": "9/26/2022",
      "stt": 1,
      "chuyenxeId": 18
    }, {
      "tgkhoihanh": "11:31 PM",
      "tgketthuc": "7:54 PM",
      "ngaykhoihanh": "12/13/2022",
      "stt": 1,
      "chuyenxeId": 3
    }, {
      "tgkhoihanh": "3:14 AM",
      "tgketthuc": "1:05 AM",
      "ngaykhoihanh": "12/29/2022",
      "stt": 1,
      "chuyenxeId": 6
    }, {
      "tgkhoihanh": "1:27 PM",
      "tgketthuc": "6:59 PM",
      "ngaykhoihanh": "4/12/2022",
      "stt": 1,
      "chuyenxeId": 6
    }, {
      "tgkhoihanh": "6:45 AM",
      "tgketthuc": "12:54 AM",
      "ngaykhoihanh": "7/14/2022",
      "stt": 1,
      "chuyenxeId": 5
    }, {
      "tgkhoihanh": "1:10 PM",
      "tgketthuc": "5:32 PM",
      "ngaykhoihanh": "8/27/2022",
      "stt": 1,
      "chuyenxeId": 16
    }, {
      "tgkhoihanh": "6:33 AM",
      "tgketthuc": "11:17 AM",
      "ngaykhoihanh": "6/8/2022",
      "stt": 1,
      "chuyenxeId": 4
    }, {
      "tgkhoihanh": "2:15 PM",
      "tgketthuc": "9:54 AM",
      "ngaykhoihanh": "11/24/2022",
      "stt": 1,
      "chuyenxeId": 10
    }, {
      "tgkhoihanh": "3:03 PM",
      "tgketthuc": "6:50 PM",
      "ngaykhoihanh": "12/5/2022",
      "stt": 1,
      "chuyenxeId": 7
    }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('CT_Chuyenxes', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('CT_Chuyenxes', items, {});
  }
};
