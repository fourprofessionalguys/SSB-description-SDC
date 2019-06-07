import mongoose from 'mongoose';

const descriptionSchema = new mongoose.Schema({
  id: Number,
  name: String,
  bestUse: String,
  climbingShoeType: String,
  last: String,
  upper: String,
  lining: String,
  outsole: String,
  footwearClosure: String,
  resole: String,
  gender: String,
  weight: String,
  quote: String,
});

const shoeSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  sizes: String,
});

const Descriptions = mongoose.model('Descriptions', descriptionSchema);
const Shoes = mongoose.model('Shoes', shoeSchema);

export {
  Descriptions,
  Shoes,
};
