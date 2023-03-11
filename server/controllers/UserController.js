const title = "Testdatabase";
const models = require("../models");
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     email: DataTypes.STRING,
//     role: DataTypes.STRING
const controller = {
    create: async(req, res) => {
        try {
            const newuser = await models.User.create({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                role: req.body.role,
            });
            newuser.save();
            res.status(200).json(newuser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async(req, res) => {
        try {
            const user = await models.User.findAll();
            res.json(user);
            //res.send("hello");
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe

    findByPk: async(req, res) => {
        try {
            const user = await models.User.findByPk(req.params.iduser);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    find: async(req, res) => {
        try {
            const user = await models.User.findOne({
                where: { username: req.body.username, password: req.body.password },
            });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const user = await models.User.destroy({
                where: { id: req.params.iduser },
            });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async(req, res) => {
        try {
            const user = await models.User.update({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                role: req.body.role,
            }, {
                where: { id: req.params.iduser },
            });

            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
module.exports = controller;