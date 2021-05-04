import mongoose from 'mongoose';
import crypto from 'crypto';

const UserSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  username: {
    required: true,
    type: String,
  },
  email: String,
  hash: {
    required: true,
    type: String,
  },
  salt: String,
});

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');

  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');

  return this.hash === hash;
};

export default UserSchema;
