

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newdiemdon = await models.Diemdon.create(
                {
                    name: req.body.tendiemdon,
                    thanhphoId: req.body.thanhphoId
                },
            );
            res.status(200).json(newdiemdon);
        } catch (err) {

            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const diemdon = await models.Diemdon.findAll();
            //res.send('eeded')
            res.status(200).json(diemdon);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe

    findByPk: async (req, res) => {

        try {
            const diemdon = await models.Diemdon.findByPk(req.params.iddiemdon)

            res.status(200).json(diemdon);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const diemdon = await models.Diemdon.destroy({
                where: { id: req.params.iddiemdon }
            })
            res.status(200).json(diemdon);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const diemdon = await models.Diemdon.update(
                {
                    name: req.body.tendiemdoan,
                    thanhphoId: req.body.thanhphoId
                }, {
                where: { id: req.params.iddiemdon },

            })
            res.status(200).json(diemdon);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}
module.exports = controller;
