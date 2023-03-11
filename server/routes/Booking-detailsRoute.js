const request = require("request-promise");
var express = require("express");

var router = express.Router();

router.get("/:id", async(req, res, next) => {
    const response = await request(
        `http://localhost:3000/api/chuyenxe/${req.params.id}`
    );
    const chuyenxe = await JSON.parse(response)[0];

    var checkArr;
    const checkedString = chuyenxe.checked;
    if (checkedString !== "") {
        checkArr = checkedString.split(",");
        checkArr = checkArr.map((i) => parseInt(i));
    } else checkArr = [];

    const timeStamp = chuyenxe.ngaykhoihanh;
    const date = new Date(timeStamp);
    const formattedDate = date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });

    const newData = await {
        id: chuyenxe.id,
        start: chuyenxe.tpdi, //sai gon
        end: chuyenxe.tpden,
        nhaxe: chuyenxe.tennhaxe,
        price: chuyenxe.giave,
        startDes: chuyenxe.diemdonsdi.split(","),
        endDes: chuyenxe.diemdonsden.split(","),
        date: formattedDate,
        timeStart: chuyenxe.tgkhoihanh,
        timeEnd: chuyenxe.tgketthuc,
        img: "https://plus.unsplash.com/premium_photo-1661760200219-6bfe3f0d72a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        type: chuyenxe.type,
        checked: checkArr,
        description: chuyenxe.motachinhsach,
    };

    await res.render("Pages/Booking-details", {
        title: "Booking-details",
        data: newData,
    });
});

module.exports = router;