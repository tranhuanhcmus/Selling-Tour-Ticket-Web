const title = "Testdatabase";
const models = require("../models");

const controller = {
    create: async(req, res) => {
        try {
            const newbenxe = await models.Benxe.create({
                tenbenxe: req.body.tenbenxe,
                sdth: req.body.sdth,
                diachi: req.body.diachi,
                thanhphoId: req.body.thanhphoId,
            });
            newbenxe.save();
            res.status(200).json(newbenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async(req, res) => {
        try {
            const benxe = await models.Benxe.findAll();
            res.status(200).json(benxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe
    findOne: async(req, res) => {
        try {
            const benxe = await models.Benxe.findOne({
                where: { tenbenxe: req.params.tenbenxe },
            }, {
                include: Thanhpho,
            });
            res.status(200).json(benxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    findByPk: async(req, res) => {
        try {
            const benxe = await models.Benxe.findByPk(req.params.idbenxe);
            res.status(200).json(benxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const benxe = await models.Benxe.destroy({
                where: { id: req.params.benxe },
            });
            res.status(200).json(benxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async(req, res) => {
        try {
            const benxe = await models.Benxe.update({
                tenbenxe: req.params.tenbenxe,
                sdth: req.params.sdth,
                diachi: req.params.diachi,
            }, {
                where: { id: req.params.idbenxe },
            });
            res.status(200).json(benxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = controller;