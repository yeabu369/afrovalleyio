const nodemailer = require('nodemailer');
const config = require('../config/auth.config');
const db = require('../models');
const algosdk = require('algosdk');

const User = db.user;
const Role = db.role;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function testAccount() {
  const testAccount = await nodemailer.createTestAccount();
}
// create reusable transporter object using the default SMTP transport
transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'ergoergo8@outlook.com',
    pass: 'ergo!@#$%123',
  },
});

const EMAIL_SECRET = 'asdf1093KMnzxcvnkljvasdu09123nlasdasdf';

exports.signup = async (req, res) => {
  // async email
  console.log(`auth routes node ${req.body.email}`);
  jwt.sign(
    {
      email: req.body.email,
      isVerified: true,
    },
    EMAIL_SECRET,
    {
      expiresIn: '1d',
    },
    (err, emailToken) => {
      const url = `http://localhost:4200/confirmation/${emailToken}`;
      console.log(`email token ${emailToken}`);
      const info = transporter.sendMail({
        from: '"AfroValley Portal 👻" <ergoergo8@outlook.com>', // sender address
        to: req.body.email, // receiver
        subject: 'Email Verification ✔', // Subject line
        html: `<b href="${url}">Welcome, </b> Click on the link or copy paste this message to your browser <br> ${url}`, // plain text body

      }, (err, info) => {
        if (err) { console.log(err); return; }
        console.log(`sent: ${info.response}`);
        res.status(500).send({ message: err });
      });

      res.status(200).send({ message: `Email sent to ${req.body.email}` });
    },
  );
};

exports.register = (req, res) => {
  const { addr, sk } = algosdk.generateAccount();

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    firstName: req.body.firstName,
    surName: req.body.surName,
    phoneNumber: req.body.phoneNumber,
    password: bcrypt.hashSync(req.body.password, 8),
    algorandAddress: addr,
    algorandSK: sk,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.role) {
      user.role = req.body.role;
    } else {
      user.role = 'user',

      res.send({ message: 'User was registered successfully!' });
    }
  });
};

exports.passwordreset = async (req, res) => {
  const { id } = req.body;
  const { token } = req.body;
  const { password } = req.body;
  const member = await memberModel.findOne({ _id: id });
  const forgotpassword = await forgotpasswordModel.findOne({
    $and: [{ member: id }, { done: false }],
  });
  if (!member) {
    return res.status(404).json({
      success: false,
      message: 'Member not found!',
    });
  }
  const decryptedToken = ted.decrypt(token);
  try {
    const verifyToken = jwt.verify(decryptedToken, forgotpassword.token);
    const hashed_password = await hashPasword(password);
    member.password = password ? hashed_password : member.password;
    member.save((err, member) => {
      if (err) {
        // console.log(err);
        return res.status(500).json({
          success: false,
          message: 'Password reset failed! member',
        });
      }
      forgotpassword.token = 'Password changed';
      forgotpassword.done = true;
      forgotpassword.save((err, forgotpassword) => {
        if (err) {
          // console.log(err);
          return res.status(500).json({
            success: false,
            message: 'Password reset failed! forgot',
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Password reseted!',
        });
      });
    });
  } catch (e) {
    // console.log(e);
    return res.status(500).json({
      success: false,
      message: 'token invalid or link expierd',
    });
  }
};

exports.signin = async (req, res) => {
  User.findOne({
    username: req.body.username,
  })

    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: 'User Not found.' });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password,
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 * 100, // 24 hours
      });

      // var authorities = [];

      // for (let i = 0; i < user.roles.length; i++) {
      //   authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      // }
      res.status(200).send({
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        surName: user.surName,
        phoneNumber: user.phoneNumber,
        role: user.role,
        accessToken: token,
      });
    });
};
