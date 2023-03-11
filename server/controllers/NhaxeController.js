

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {
      try {
        const newnhaxe = await models.Nhaxe.create(req.body);
        res.status(201).json(newnhaxe);
      } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server error' });
      }
    },
    
    findAll: async (req, res) => {
        try {
          const nhaxe = await models.Nhaxe.findAll();
          res.status(200).json(nhaxe);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server error' });
        }
    },
    
    findOne: async (req, res) => {
        try {
          // Find the Nhaxe by its name
          const nhaxe = await models.Nhaxe.findOne({ where: { tennhaxe: req.body.tennhaxe } });
          
          // If no Nhaxe is found, return a 404
          if (!nhaxe) return res.status(404).json({ message: 'Nhaxe not found' });
    
          res.status(200).json(nhaxe);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server error' });
        }
    },
    
    findByPk: async (req, res) => {
      try {
        const nhaxe = await models.Nhaxe.findByPk(req.params.id);
        if (!nhaxe) return res.status(404).json({ message: 'Nhaxe not found' });
        res.status(200).json(nhaxe);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
    },
    update: async (req, res) => {
      try {
        const nhaxe = await models.Nhaxe.findByPk(req.params.id);
        if (!nhaxe) {
          res.status(404).json({ message: 'Nhaxe not found' });
        } else {
          await nhaxe.update(req.body);
          res.status(200).json(nhaxe);
        }
      } catch (err) {
        res.status(500).json(err);
      }
      },

    delete: async (req, res) => {
        try {
          // Find the Nhaxe by its primary key
          const nhaxe = await models.Nhaxe.findByPk(req.params.id);
          
          // If no Nhaxe is found, return a 404
          if (!nhaxe) return res.status(404).json({ message: 'Nhaxe not found' });
    
          // Delete the Nhaxe
          await nhaxe.destroy();
          res.status(200).json({ message: 'Nhaxe deleted successfully' });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server error' });
        }
    }

}
module.exports = controller;
