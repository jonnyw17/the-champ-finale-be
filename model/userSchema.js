const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  fullname: {type: String, required: true},
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postcode: {type: String, require: true},
  twitterhandle: { type: String, unique: true },
  currentchamp: { type: Boolean, default: false },
  provoked: {
    wasprovoked: {type: Boolean, default: false},
    challengeaccepted: {type: Boolean, default: false}
  },
  online: { type: Boolean, default: true }
});

const User = mongoose.model('thechampusers', userSchema);

module.exports = User
