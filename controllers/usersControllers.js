const mongoose = require('mongoose');
mongoose.Promise = Promise;
const User = require('../model/userSchema');

getAllUsers = (req, res, next) => {
  User.find()
      .then(users => {
          res.status(200)
          JSON.stringify(users)

          res.send(users)
      })
      .catch((err) => next(err))
};

 loginUser = (req, res) => {
   User.findOne({username: req.body.username, password: req.body.password}, (err, user) => {

     if(err) {
       console.log(err);
       return res.status(500).send();
     }

     if(!user) {
       res.redirect('https://thechamp.herokuapp.com/signin');
     }

     if(user) {
       res.redirect('https://thechamp.herokuapp.com/platform');
     }
   }).catch((err) => next(err))
}

postNewUser = (req, res) => {
  let newUser = new User({
    fullname: req.body.fullname,
    username: req.body.username,
    password: req.body.password,
    address: req.body.address,
    city: req.body.city,
    postcode: req.body.postcode,
    twitterhandle: '@' + req.body.twitterhandle,
    currentchamp: false,
    provoked: {
      wasprovoked: false,
      challengeaccepted: false
    },
    online: true
  });

  newUser.save((err, savedUser) => {
    if(err) {
      console.log(err.message);
      res.redirect('https://thechamp.herokuapp.com/signup');
    }

    if(savedUser) {
      res.redirect('https://thechamp.herokuapp.com/platform');
    }
  }).catch((err) => next(err))
}

module.exports = {
  postNewUser,
  loginUser,
  getAllUsers
};
