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

// Update a Crop by the id in the request
exports.update = (req, res) => {
  const { id } = req.params;

  Crop.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Crop was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Crop with id=${id}. Maybe Crop was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Crop with id=${id}`,
      });
    });
}

// Delete a Crop with the specified id in the request
exports.delete = (req, res) => {
  const { id } = req.params;

  Crop.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Crop was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Crop with id=${id}. Maybe Crop was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete Crop with id=${id}`,
      });
    });
}

// Delete all Crops from the database.
exports.deleteAll = (req, res) => {
  Crop.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Crops were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all crops.',
      });
    });
}

