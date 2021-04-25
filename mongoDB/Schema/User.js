import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
});

export default userSchema;
