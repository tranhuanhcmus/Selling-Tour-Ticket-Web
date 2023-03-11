var express = require("express");
var router = express.Router();

const rp = require("request-promise");

router.get("/:id", async function(req, res, next) {
    const response = await rp(
        `http://localhost:3000/api/phieuxe/${req.params.id}`
    );
    if (JSON.parse(response).length != 0) {
        const data = await JSON.parse(response)[0];
        const chuyenxeId = data.chuyenxeId;
        const chuyenxeRes = await rp(
            `http://localhost:3000/api/chuyenxe/${chuyenxeId}`
        );
        const chuyenxe = JSON.parse(chuyenxeRes)[0];
        res.render("Pages/ticketinfo", {
            data: data,
            chuyenxe: chuyenxe,
            status: "success",
        });
    } else res.redirect("/error");
});

router.post("/", (req, res) => {
    let idKH;

    // //them khach hang
    let options = {
        method: "POST",
        uri: "http://localhost:3000/api/khachhang/create",
        body: {
            email: req.body.email,
            ten: req.body.name,
            sdt: req.body.tel,
        },
        json: true,
        headers: {
            "Content-Type": "application/json",
        },
    };

    rp(options)
        .then(function(parsedBody) {
            idKH = parsedBody.id;
            console.log({ status: "add KH success", idKh: parsedBody.id });
        })
        .catch(function(err) {
            res.status(500).json({ status: "fail by khachhangs", err: err });
        });

    //update chuyenxes
    options = {
        method: "PUT",
        uri: `http://localhost:3000/api/chuyenxe/${req.body.id}`,
        body: {
            checked: req.body.seats.join(),
        },
        json: true,
        headers: {
            "Content-Type": "application/json",
        },
    };
    rp(options)
        .then(function(parsedBody) {
            console.log({ status: "update chuyenxes success", idKH: idKH });
        })
        .then(() => {
            // //add phieuxes
            options = {
                method: "POST",
                uri: `http://localhost:3000/api/phieuxe/create`,
                body: {
                    soluong: req.body.seats.join(),
                    tongtien: req.body.price,
                    chuyenxeId: req.body.id,
                    khachhangId: parseInt(idKH),
                    diemdon: req.body.start,
                    diemtra: req.body.end,
                    trangthai: 1,
                },
                json: true,
                headers: {
                    "Content-Type": "application/json",
                },
            };
            rp(options)
                .then((parsedBody) => {
                    res.status(200).json({
                        status: "success",
                        phieuxe: parsedBody,
                    });
                })
                .catch(function(err) {
                    res.status(500).json({
                        status: "fail by phieuxes",
                    });
                });
        })
        .catch(function(err) {
            res.status(500).json({ status: "fail by chuyenxes" });
        });
});

module.exports = router;