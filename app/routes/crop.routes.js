const crops = require('../controllers/crop.controller.js');
const db = require('../models');

const Crop = db.crop;

module.exports = (app) => {
  // Create a new Crop
  app.post('/crops', crops.create);

  // Retrieve all Crops
  app.get('/crops', crops.findAll);

  // Retrieve a single Crop with id
  app.get('/crops/:id', crops.findOne);

  // Update a Crop with id
  app.put('/crops/:id', crops.update);

  // Delete a Crop with id
  app.delete('/crops/:id', crops.delete);

  // Create a new Crop
  app.delete('/crops', crops.deleteAll);
};
