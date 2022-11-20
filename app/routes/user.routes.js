const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { authJwt } = require('../middlewares');
const controller = require('../controllers/user.controller');
const User = require('../models/user.model');
const config = require('../config/auth.config');

module.exports = function (app) {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/test/all', controller.allAccess);
  // app.get("api/confirmation/:token", controller.emailVerfication);

  app.get('/api/test/user', [authJwt.verifyToken], controller.userBoard);

  app.get(
    '/api/test/super-admin',
    [authJwt.verifyToken, authJwt.isModerator],
    controller.superAdminBoard,
  );

  app.get(
    '/api/test/portal-admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard,
  );

  app.put('/api/user/update', controller.updateProfile);

  app.get('/api/admin/users', async (req, resp) => {
    console.log(req.query);
    const data = await User.find({}, 'firstName surName email tel dob role', (err, docs) => {
      if (err) {
        resp.send(err);
      }
      resp.json(docs);
    });
  });

  app.put('/api/admin/roles', async (request, response) => {
    const token = request.headers['x-access-token'];
    let id;

    if (!token) {
      return response.status(403).send({ message: 'No token provided!' });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return response.status(401).send({ message: 'Unauthorized!' });
      }
      id = decoded.id;
    });
    uId = mongoose.Types.ObjectId(id);
    userId = mongoose.Types.ObjectId(request.body.userId);
    // Yes, it's a valid ObjectId, proceed with `findById` call.
    const { role } = request.body;
    User.findOne({ _id: uId, role: 'super-admin' }, (err, docs) => {
      if (docs) {
        User.findOneAndUpdate({ _id: userId }, { $set: { role } }, {
          returnNewDocument: true,
        }, (err, data) => {
          if (err) {
            console.log(err);
            response.status(500).send('error');
          }
          // if(data){
          response.status(200).send(data);

          // }
        });
      } else {
        response.status(401).send('Unauthorized');
      }
    });
  });
};
