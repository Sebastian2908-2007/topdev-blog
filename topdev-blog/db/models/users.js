import mongoose from "mongoose";
const {Schema, model} = mongoose;
const bcrypt = require('bcryptjs');

const userSchema = Schema({
  userName:{
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true
  }
});

/* set up pre-save middleware to create a password */
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
      const saltRounds = 11;
      this.password = await bcrypt.hash(this.password, saltRounds)
  }
  next();
});


const User = mongoose.models.User || model('User', userSchema);

module.exports = User;