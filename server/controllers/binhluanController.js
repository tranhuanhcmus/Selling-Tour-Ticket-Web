

const title = 'Testdatabase';
const models = require('../models');

const controller = {
    create: async (req, res) => {
        try {
          const newNhanvien = await models.Nhanvien.create(req.body);
          res.status(200).json(newNhanvien);
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
    
    findByPk: async (req, res) => {
        try {
            const nhanvien = await models.Nhanvien.findByPk(req.params.idnhanvien);
            if (!nhanvien) {
            res.status(404).json({ message: 'Nhanvien not found' });
            } else {
                res.status(200).json(nhanvien);
            }
        }catch (err) {
            res.status(500).json(err);
        }
    },

    findByTen: async (req, res) => {
        try {
          const nhanvien = await models.Nhanvien.findOne({
            where: { ten: req.params.ten }
          });
          if (!nhanvien) {
            res.status(404).json({ message: 'Nhanvien not found' });
          } else {
            res.status(200).json(nhanvien);
          }
        } catch (err) {
          res.status(500).json(err);
        }
    },
    delete: async (req, res) => {
        try {
          const nhanvien = await models.Nhanvien.findByPk(req.params.idnhanvien);
          if (!nhanvien) {
            res.status(404).json({ message: 'Nhanvien not found' });
          } else {
            await nhanvien.destroy();
            res.status(200).json(nhanvien);
          }
        } catch (err) {
          res.status(500).json(err);
        }
    },

    update: async (req, res) => {
        try {
          const nhanvien = await models.Nhanvien.findByPk(req.params.idnhanvien);
          if (!nhanvien) {
            res.status(404).json({ message: 'Nhanvien not found' });
          } else {
            await nhanvien.update(req.body);
            res.status(200).json(nhanvien);
          }
        } catch (err) {
          res.status(500).json(err);
        }
    },
    

}
module.exports = controller;
