const mongoose = require('mongoose');

exports.connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Database connected Sucessfully');
  } catch (error) {
    console.log('Error while connecting to database');
  }
};
