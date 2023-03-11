

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newnhanvien = await models.Nhanvien(req.body);
            await newnhanvien.save();
            res.status(200).json(newnhanvien);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const nhanvien = await models.Nhanvien.findAll();
            res.status(200).json(nhanvien);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe

    findByPk: async (req, res) => {

        try {
            const nhanvien = await models.Nhanvien.findByPk(req.params.idnhanvien)
            res.status(200).json(nhanvien);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const nhanvien = await models.Nhanvien.destroy({
                where: { id: req.params.nhanvien }
            })
            res.status(200).json(nhanvien);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const nhanvien = awaitmodels.Nhanvien.update(
                {
                    tenbenxe: req.params.tenbenxe,
                    sdth: req.params.sdth,
                    diachi: req.params.diachi,
                    luong: req.params.luong,
                    gender: req.params.gender,
                    ngayvl: req.params.ngayvl,
                    role: req.params.role,
                    username: req.params.username,
                    password: req.params.password,
                    accesstoken: req.params.accesstoken,
                    email: req.params.email
                }, {
                where: { id: req.params.idnhanvien }
            })
            res.status(200).json(nhanvien);
        } catch (err) {
            res.status(500).json(err);
        }
    },



}
module.exports = controller;
