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
      "ten": "Malvina Snalum",
      "sdt": "554-783-3503",
      "email": "msnalum0@deviantart.com"
    }, {
      "ten": "Gavin Kelsall",
      "sdt": "690-524-3559",
      "email": "gkelsall1@army.mil"
    }, {
      "ten": "Nikkie Culmer",
      "sdt": "159-194-5614",
      "email": "nculmer2@skype.com"
    }, {
      "ten": "Cybill Enticott",
      "sdt": "878-308-7689",
      "email": "centicott3@diigo.com"
    }, {
      "ten": "Hirsch Syson",
      "sdt": "296-383-4934",
      "email": "hsyson4@blinklist.com"
    }, {
      "ten": "Bernardina Graver",
      "sdt": "412-288-9370",
      "email": "bgraver5@seattletimes.com"
    }, {
      "ten": "Horten Facey",
      "sdt": "498-928-3112",
      "email": "hfacey6@webeden.co.uk"
    }, {
      "ten": "Margeaux Postill",
      "sdt": "636-353-4780",
      "email": "mpostill7@ycombinator.com"
    }, {
      "ten": "Sherm Spurnier",
      "sdt": "646-743-6242",
      "email": "sspurnier8@admin.ch"
    }, {
      "ten": "Annemarie Dannel",
      "sdt": "752-758-7428",
      "email": "adannel9@statcounter.com"
    }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Khachhangs', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Khachhangs', items, {});
  }

};
