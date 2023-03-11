

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newct_phieuxe = await models.CT_Phieuxe.create(
                {
                    soghe: req.body.soghe,
                    sotang: req.body.sotang,
                    phieuxeId: req.body.phieuxeId,
                    chuyenxeId: req.body.chuyenxeId
                },
            );
            newct_phieuxe.save();

            res.status(200).json(newct_phieuxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const ct_phieuxe = await models.CT_Phieuxe.findAll();
            // res.status(200).json(benxe);
            res.json(ct_phieuxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe

    findByPk: async (req, res) => {

        try {
            const ct_phieuxe = await models.CT_Phieuxe.findByPk(req.params.idct_phieuxe)

            res.status(200).json(ct_phieuxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const ct_phieuxe = await models.CT_Phieuxe.destroy({
                where: { id: req.params.idct_phieuxe }
            })
            res.status(200).json(ct_phieuxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const ct_phieuxe = await models.CT_Phieuxe.update(
                {
                    soghe: req.body.soghe,
                    sotang: req.body.sotang,
                    phieuxeId: req.body.phieuxeId,
                    chuyenxeId: req.body.chuyenxeId
                }, {
                where: { id: req.params.idct_phieuxe },

            })
            res.status(200).json(ct_phieuxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}
module.exports = controller;
