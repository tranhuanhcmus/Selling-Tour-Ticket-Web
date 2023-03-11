var express = require("express");
var router = express.Router();
const controller = require("../controllers/adminController");
const models = require("../models");

router.get("/nhaxe", async function(req, res, next) {
    try {
        var newData = await models.Nhaxe.findAll();
        res.render("Pages/adminNhaxe", {
            col: ["Mã Nhà Xe", "Tên Nhà Xe ", "Số điện thoại", "Hình ảnh"],
            title: "Quản lí nhà xe",
            data: newData,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Failed to retrieve data" });
    }
});

router.delete("/nhaxe/:id", async function(req, res, next) {
    try {
        await models.Nhaxe.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).send({ message: "Successfully deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "delete nhaxe failed" });
    }
});

router.put("/nhaxe", async function(req, res, next) {
    try {
        const response = await request(`http://localhost:3000/admin/nhaxe`);
        const nhaxe = await models.Nhaxe.findByPk(req.params.id);
        if (!nhaxe) {
            res.status(404).json({ message: "Nhaxe not found" });
        } else {
            await nhaxe.update(req.body);
            res.status(200).json(nhaxe);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/chuyenxe", async function(req, res, next) {
    var newData = await models.Chuyenxe.findAll();
    res.render("Pages/adminChuyenxe", {
        col: [
            "Mã Chuyến Xe",
            "motachinhsach",
            "giave",
            "xeId",
            "nhaxeId",
            "thanhphodiId",
            "thanhphodenId",
            "checked",
            "type",
        ],
        title: "Quản lí chuyến xe",
        data: newData,
    });
});
router.get("/phieuxe", async function(req, res, next) {
    var newData = await models.Phieuxe.findAll();

    res.render("Pages/adminPhieuxe", {
        col: [
            "idphieuxe",
            "soluong",
            "tongtien",
            "trangthai",
            "chuyenxeId",
            "khachhangId",
        ],
        title: "Quản lí chuyến xe",
        data: newData,
    });
});

router.get("/");
module.exports = router;