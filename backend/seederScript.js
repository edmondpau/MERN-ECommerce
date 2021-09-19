require('dotenv').config();
const mongoose = require('mongoose');

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productsData);

    console.log('Data Import Success');

    process.exit();
  } catch (error) {
    console.error('ERRRRRRRRRRRRRRR', error);
    process.exit(1);
  }
};

importData();
