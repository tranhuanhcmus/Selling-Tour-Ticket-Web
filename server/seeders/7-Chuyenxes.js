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

        const items = [{
                motachinhsach: "morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 279,
                xeId: 7,
                nhaxeId: 2,
                thanhphodiId: 2,
                thanhphodenId: 3,
                checked: "1,3,4,5",
                type: "Xe giường nằm",
            },
            {
                motachinhsach: "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 232,
                xeId: 6,
                nhaxeId: 4,
                thanhphodiId: 4,
                thanhphodenId: 4,
                checked: "1,3,4,5",
                type: "Xe giường nằm",
            },
            {
                motachinhsach: "duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 263,
                xeId: 6,
                nhaxeId: 1,
                thanhphodiId: 2,
                thanhphodenId: 2,
                checked: "1,3,4,5",
                type: "Xe giường phòng",
            },
            {
                motachinhsach: "mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 213,
                xeId: 4,
                nhaxeId: 1,
                thanhphodiId: 4,
                thanhphodenId: 1,
                checked: "1,3,4,5",
                type: "Xe giường phòng",
            },
            {
                motachinhsach: "turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80g",
                giave: 282,
                xeId: 9,
                nhaxeId: 3,
                thanhphodiId: 1,
                thanhphodenId: 4,
                checked: "5",
                type: "Xe giường phòng",
            },
            {
                motachinhsach: "ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 210,
                xeId: 2,
                nhaxeId: 2,
                thanhphodiId: 1,
                thanhphodenId: 1,
                checked: "",
                type: "Xe thường",
            },
            {
                motachinhsach: "vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 284,
                xeId: 6,
                nhaxeId: 4,
                thanhphodiId: 1,
                thanhphodenId: 2,
                checked: "",
                type: "Xe thường",
            },
            {
                motachinhsach: "in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 255,
                xeId: 5,
                nhaxeId: 1,
                thanhphodiId: 1,
                thanhphodenId: 2,
                checked: "",
                type: "Xe thường",
            },
            {
                motachinhsach: "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 215,
                xeId: 3,
                nhaxeId: 3,
                thanhphodiId: 1,
                thanhphodenId: 3,
                checked: "",
                type: "Xe giường phòng",
            },
            {
                motachinhsach: "maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 263,
                xeId: 2,
                nhaxeId: 2,
                thanhphodiId: 4,
                thanhphodenId: 4,
                checked: "",
                type: "Xe giường phòng",
            },
            {
                motachinhsach: "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 274,
                xeId: 5,
                nhaxeId: 1,
                thanhphodiId: 4,
                thanhphodenId: 1,
                checked: "",
                type: "Xe giường phòng",
            },
            {
                motachinhsach: "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 281,
                xeId: 9,
                nhaxeId: 1,
                thanhphodiId: 1,
                thanhphodenId: 1,
                checked: "",
                type: "Xe giường phòng",
            },
            {
                motachinhsach: "lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 221,
                xeId: 10,
                nhaxeId: 2,
                thanhphodiId: 4,
                thanhphodenId: 3,
                checked: "",
                type: "Xe giường phòng",
            },
            {
                motachinhsach: "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 291,
                xeId: 8,
                nhaxeId: 3,
                thanhphodiId: 4,
                thanhphodenId: 2,
                checked: "",
                type: "Xe giường phòng",
            },
            {
                motachinhsach: "vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 270,
                xeId: 7,
                nhaxeId: 4,
                thanhphodiId: 1,
                thanhphodenId: 1,
                checked: "",
                type: "Xe giường phòng",
            },
            {
                motachinhsach: "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 248,
                xeId: 2,
                nhaxeId: 3,
                thanhphodiId: 4,
                thanhphodenId: 4,
                checked: "",
                type: "Xe giường phòng",
            },
            {
                motachinhsach: "proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 227,
                xeId: 3,
                nhaxeId: 2,
                thanhphodiId: 4,
                thanhphodenId: 3,
                checked: "",
                type: "Xe giường nằm",
            },
            {
                motachinhsach: "turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 233,
                xeId: 10,
                nhaxeId: 3,
                thanhphodiId: 2,
                thanhphodenId: 4,
                checked: "",
                type: "Xe giường nằm",
            },
            {
                motachinhsach: "lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 267,
                xeId: 6,
                nhaxeId: 1,
                thanhphodiId: 1,
                thanhphodenId: 3,
                checked: "",
                type: "Xe giường nằm",
            },
            {
                motachinhsach: "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan",
                src: "https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                giave: 201,
                xeId: 1,
                nhaxeId: 3,
                thanhphodiId: 1,
                thanhphodenId: 4,
                checked: "",
                type: "Xe giường nằm",
            },
        ];
        items.forEach((item) => {
            item.createdAt = Sequelize.literal("NOW()");
            item.updatedAt = Sequelize.literal("NOW()");
        });
        await queryInterface.bulkInsert("Chuyenxes", items, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.Delete("Chuyenxes", items, {});
    },
};