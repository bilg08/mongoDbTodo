const mongoose = require('mongoose');

const registerationSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  todos:{type:Array}
});
module.exports = mongoose.model('signUp',registerationSchema);