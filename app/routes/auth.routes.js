const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const db = require("../models");
const nodemailer = require("nodemailer");

const ROLES = db.ROLES;
const User = db.user;

const EMAIL_SECRET = 'asdf1093KMnzxcvnkljvasdu09123nlasdasdf';
transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "ergoergo8@outlook.com",
    pass: "ergo!@#$%123", 
  },
});
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/auth/verify",     controller.signup
  );


  app.post(
    "/api/auth/forgot-password",   (req,res,next) => {
      const {email} = req.body;
      console.log(email);
      User.findOne({
        email: email
      }).exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          
         
        }
        if (user) {

          const secret = EMAIL_SECRET;
      const payload = {
        email: user.email,
        id: user.id,
      };
      const token = jwt.sign(payload,secret, {expiresIn: '1115m'});
      const link = `http://localhost:4200/reset-password/${token}`;
      console.log("user found -- " +link);
      let info =  transporter.sendMail({
        from: '"AV Portal 👻" <ergoergo8@outlook.com>', // sender address
        to: email, // receiver
        subject: "AV Password Reset ✔", // Subject line
        html: `<b href="${link}">Hello, </b> Click on the link or copy paste this message to change your password <br> ${link}`, // plain text body
      
      }, function(err,info){
        if(err) {console.log(err); return}
        console.log("sent: " +info.response);
        res.status(500).send({ message: err });
               
      });
     ;
      res.status(200).send('Password reset link has been to your email');

         return;
        }
       
      });
          

    }
  );


  app.put('/api/auth/reset-password', async (req, res) => {
    const {email,password} = req.body;
    console.log(email + password);
    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = User.findOneAndUpdate({email:email},{$set:{password:hashedPassword}},function(err, data){
      if(err){
          console.log("Something wrong when updating password!");
      }
     
      res.status(200).send('Password Successfully changed');
  });
  if(!user) res.status(500).send('Password reset Unsuccessful please try again!');
  return;
  }
  
  );

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.register
  );
  
  app.post('/confirmation', async (req, res) => {
    console.log("token value "+req.body.token);
    try {
      console.log.apply("confirming jwt verify");
      const decode = jwt.verify(req.body.token, EMAIL_SECRET);
      console.log.apply("decode var "+ decode);
      res.json({
      isVerified: decode.isVerified,
      email: decode.email
    });
    
    
    } catch (e) {
      res.send('error');
      console.log("not verified error here" + e);
    }
   
  });

  app.post("/api/auth/signin", controller.signin);
};
