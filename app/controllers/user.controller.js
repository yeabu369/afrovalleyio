const User = require("../models/user.model");


exports.allAccess = (req, res) => {

  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.superAdminBoard = (req, res) => {
  res.status(200).send("Super Admin Content.");
};

exports.emailVerification = (req, res)=> {
  res.status(200).send("Super Admin Content.");
}
exports.updateProfile = async (req, res) => {
 const user = User.findOneAndUpdate({"email":req.body.data.email},{$set:{ "firstName": req.body.data.firstName,"surName": req.body.data.surName, "tel": req.body.data.tel, "dob": req.body.data.dob}},function(err, data){
    if(err){
        console.log("Something wrong when updating profile!");
    }
   console.log(data);
    res.status(200).send('Profile Successfully changed');
});
if(!user) res.status(500).send('Password update unsuccessful please try again!');
return;
}