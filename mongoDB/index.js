import mongoose from 'mongoose';
import User from './Schema/User.js';

export default {
  connect: () => {
    mongoose.connect('mongodb+srv://admin:admin@cluster0.im6rl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err) => {
      if (err) throw err;

      console.log('Mongo: Successfully connected');
    });
  },
  mongoose,
  model: {
    User: mongoose.model('User', User),
  },
};
