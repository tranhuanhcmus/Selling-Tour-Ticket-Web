const models = require("../models");
const { QueryTypes } = require("sequelize");

const controller = {
    create: async (req, res) => {
        try {
            const newchuyenxe = await models.Chuyenxe.create({
                motachinhsach: req.body.motachinhsach,
                src: req.body.src,
                giave: req.body.giave,
                xeId: req.body.xeId,
                nhaxeId: req.body.nhaxeId,
                thanhphodiId: req.body.thanhphodiId,
                thanhphodenId: req.body.thanhphodenId,
            });
            newchuyenxe.save();

            res.status(200).json(newchuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {
        try {
            const chuyenxe = await models.sequelize.query(
                `select "Chuyenxes".id, "Chuyenxes".type, "Chuyenxes".checked, "tpdi"."tenthanhpho" as "tpdi", "tpden"."tenthanhpho" as "tpden", "tpdi"."diemdons" as "diemdonsdi", "tpden"."diemdons" as "diemdonsden", motachinhsach, src, giave, "Nhaxes".tennhaxe, "CT_Chuyenxes".ngaykhoihanh, "CT_Chuyenxes".tgkhoihanh, "CT_Chuyenxes".tgketthuc
                from "Chuyenxes" join "Thanhphos" as "tpdi" on "Chuyenxes"."thanhphodiId" = "tpdi".id join "Thanhphos" as "tpden" on "Chuyenxes"."thanhphodenId" = "tpden".id, "Nhaxes", "CT_Chuyenxes"
                where "Chuyenxes"."nhaxeId" = "Nhaxes".id and "Chuyenxes".id = "CT_Chuyenxes".id`, {
                replacements: {},
                type: QueryTypes.SELECT,
            }
            );

            res.status(200).json(chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe

    findByPk: async (req, res) => {
        try {
            const chuyenxe = await models.sequelize.query(
                `select "Chuyenxes".id, "Chuyenxes".type, "Chuyenxes".checked, "tpdi"."tenthanhpho" as "tpdi", "tpden"."tenthanhpho" as "tpden", "tpdi"."diemdons" as "diemdonsdi", "tpden"."diemdons" as "diemdonsden", motachinhsach, src, giave, "Nhaxes".tennhaxe, "CT_Chuyenxes".ngaykhoihanh, "CT_Chuyenxes".tgkhoihanh, "CT_Chuyenxes".tgketthuc 
                from "Chuyenxes" join "Thanhphos" as "tpdi" on "Chuyenxes"."thanhphodiId" = "tpdi".id join "Thanhphos" as "tpden" on "Chuyenxes"."thanhphodenId" = "tpden".id, "Nhaxes", "CT_Chuyenxes"
                where "Chuyenxes"."nhaxeId" = "Nhaxes".id and "Chuyenxes".id = "CT_Chuyenxes".id and "Chuyenxes".id = ${req.params.idchuyenxe}`, {
                replacements: {},
                type: QueryTypes.SELECT,
            }
            );

            res.status(200).json(chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {
        try {
            const chuyenxe = await models.Chuyenxe.destroy({
                where: { id: req.params.idchuyenxe },
            });

            res.status(200).json(chuyenxe);
        } catch (err) {
            console.log("error when delete Chuyen xe");
        }
    },
    update: async (req, res) => {
        try {
            const chuyenxe = await models.Chuyenxe.update(req.body, {
                where: { id: req.params.idchuyenxe },
            });
            res.status(200).json(chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
module.exports = controller;