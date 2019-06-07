/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';

import Descriptions from './descriptionSchema.js';
import Shoes from './descriptionSchema.js';

const connectDB = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Descriptions, Shoes };

export { connectDB };

export default models;
