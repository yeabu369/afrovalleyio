// Crop Controller
// Path: app/controllers/crop.controller.js
// Compare this snippet from app/controllers/crop.controller.js:
const db = require('../models');

const Crop = db.crop;

// Create and Save a new Crop
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a Crop
  const crop = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    image: req.body.image,
  };

  // Save Crop in the database
  Crop.create(crop)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Crop.',
      });
    });
};

// Retrieve all Crops from the database.
exports.findAll = (req, res) => {
  const { name } = req.query;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Crop.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving crops.',
      });
    });
};

// Find a single Crop with an id
exports.findOne = (req, res) => {
  const { id } = req.params;

  Crop.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Crop with id=${id}`,
      });
    });
};
