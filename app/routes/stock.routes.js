const db = require('../models');

const Stock = db.stock;

module.exports = function (app) {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/stocks', (req, res) => {
    Stock.find().exec((err, stocks) => {
      if (err) {
        res.status(500).send({ message: err });
      }
      res.status(200).send(stocks);
    });
  });

  app.get('/api/stocks/:id', (req, res) => {
    const { id } = req.params;
    Stock.findById(id).exec((err, stock) => {
      if (err) {
        res.status(500).send({ message: err });
      }
      res.status(200).send(stock);
    });
  });

  app.post('/api/stocks', (req, res) => {
    const {
      name, description, price, quantity, image,
    } = req.body;
    const stock = new Stock({
      name,
      description,
      price,
      quantity,
      image,
    });
    stock.save((err, stock) => {
      if (err) {
        res.status(500).send({ message: err });
      }
      res.status(200).send(stock);
    });
  });

  app.put('/api/stocks/:id', (req, res) => {
    const { id } = req.params;
    const {
      name, description, price, quantity, image,
    } = req.body;
    Stock
      .findById(id)
      .exec((err, stock) => {
        if (err) {
          res.status(500).send({ message: err });
        }
        stock.name = name;
        stock.description = description;
        stock.price = price;
        stock.quantity = quantity;
        stock.image = image;
        stock.save((err, stock) => {
          if (err) {
            res.status(500).send({ message: err });
          }
          res.status(200).send(stock);
        });
      });
  });
};
