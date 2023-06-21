var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  username: { type: String },
  email: { type: String, unique: true },
  address: {
    city: String,
    state: {type:String,unique:true},
    country: String,
    pin: Number,
  },
});

userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ 'address.country': 1, 'address.state': 1 });

module.exports = mongoose.model('User', userSchema);
