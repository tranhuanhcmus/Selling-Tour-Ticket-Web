

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newthanhpho = await models.Thanhpho(req.body);
            await newthanhpho.save();
            res.status(200).json(newthanhpho);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const thanhpho = await models.Thanhpho.findAll();;
            res.status(200).json(thanhpho);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    findOne: async (req, res) => {

        try {
            const thanhpho = await models.Thanhpho.findOne(
                {
                    where:
                        { tenthanhpho: req.params.tenthanhpho }// tìm thành phố theo tên 
                });
            res.status(200).json(thanhpho);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    findByPk: async (req, res) => {

        try {
            const thanhpho = await models.Thanhpho.findByPk(req.params.idthanhpho)
            res.status(200).json(thanhpho);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const thanhpho = await models.Thanhpho.destroy({
                where: { id: req.params.idthanhpho }
            })
            res.status(200).json(thanhpho);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const thanhpho = await models.Thanhpho.update(
                {
                    tenthanhpho: req.params.tenthanhpho
                }, {
                where: { id: req.params.idthanhpho }
            })
            res.status(200).json(thanhpho);
        } catch (err) {
            res.status(500).json(err);
        }
    },



}
module.exports = controller;
