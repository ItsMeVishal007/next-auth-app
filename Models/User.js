const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  UserName: {
    type: String
  },
  Password: {
    type: String
  },
  email: {
    type: String
  },
  Age: {
    type: String
  }
})

module.exports = mongoose.models.User || mongoose.model('User' , UserSchema);