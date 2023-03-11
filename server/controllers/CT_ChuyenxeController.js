

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newct_chuyenxe = await models.CT_Chuyenxe.create(
                {
                    tgkhoihanh: req.body.tgkhoihanh,
                    tgketthuc: req.body.tgketthuc,
                    ngaykhoihanh: req.body.ngaykhoihanh,
                    stt: req.body.stt,
                    chuyenxeId: req.chuyenxeId
                },
            );
            newct_chuyenxe.save();

            res.status(200).json(newct_chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const ct_chuyenxe = await models.CT_Chuyenxe.findAll();
            // res.status(200).json(benxe);
            res.json(ct_chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe

    findByPk: async (req, res) => {

        try {
            const ct_chuyenxe = await models.CT_Chuyenxe.findByPk(req.params.idct_chuyenxe)
            res.status(200).json(ct_chuyenxe);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const ct_chuyenxe = await models.CT_Chuyenxe.destroy({
                where: { id: req.params.idct_chuyenxe }
            })

            res.status(200).json(ct_chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const ct_chuyenxe = await models.CT_Chuyenxe.update(
                {
                    tgkhoihanh: req.body.tgkhoihanh,
                    tgketthuc: req.body.tgketthuc,
                    ngaykhoihanh: req.body.ngaykhoihanh,
                    stt: req.body.stt,
                    chuyenxeId: req.chuyenxeId
                }, {
                where: { id: req.params.idct_chuyenxe },

            })
            res.status(200).json(ct_chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}
module.exports = controller;
