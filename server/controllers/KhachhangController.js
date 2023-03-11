

const title = 'Testdatabase';
const models = require('../models');

const controller = {
    create: async (req, res) => {
      try {
        const newkhachhang = await models.Khachhang.create(req.body);
        res.status(200).json(newkhachhang);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    findAll: async (req, res) => {
      try {
        const khachhang = await models.Khachhang.findAll();
        res.status(200).json(khachhang);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    findByPk: async (req, res) => {
      try {
        const khachhang = await models.Khachhang.findByPk(req.params.idkhachhang);
        if (!khachhang) {
          res.status(404).json({ message: 'Khachhang not found' });
        } else {
          res.status(200).json(khachhang);
        }
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    delete: async (req, res) => {
      try {
        const khachhang = await models.Khachhang.findByPk(req.params.idkhachhang);
        if (!khachhang) {
          res.status(404).json({ message: 'Khachhang not found' });
        } else {
          await khachhang.destroy();
          res.status(200).json(khachhang);
        }
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    update: async (req, res) => {
      try {
        const khachhang = await models.Khachhang.findByPk(req.params.idkhachhang);
        if (!khachhang) {
          res.status(404).json({ message: 'Khachhang not found' });
        } else {
          await khachhang.update(req.body);
          res.status(200).json(khachhang);
        }
      } catch (err) {
        res.status(500).json(err);
      }
    },
  };
  
  module.exports = controller;
