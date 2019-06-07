require('dotenv').config();
const { Pool } = require('pg');

const connectionString = process.env.CON_STRING;

const pool = process.env.NODE_ENV === 'production' ? new Pool({ connectionString }) : new Pool({
  user: process.env.LOCAL_USER,
  host: process.env.LOCAL_HOST,
  database: process.env.LOCAL_DATABASE,
  password: process.env.LOCAL_PASSWORD,
  port: 5432,
});
const getDescriptions = (cb) => {
  pool.query(`SELECT * FROM descriptionData WHERE id =1`, (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(error, results.rows[0]);
    }
  });
};

const getMensSizes = (cb) => {
  pool.query('SELECT * FROM shoeSizes WHERE name = \'mensSizes\'', (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(error, results.rows[0].sizes);
    }
  });
};

const getWomensSizes = (cb) => {
  pool.query('SELECT * FROM shoeSizes WHERE name = \'womensSizes\'', (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(error, results.rows[0].sizes);
    }
  });
};

const getEuSizes = (cb) => {
  pool.query('SELECT * FROM shoeSizes WHERE name = \'euSizes\'', (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(error, results.rows[0].sizes);
    }
  });
};

module.exports = {
  getDescriptions,
  pool,
  getMensSizes,
  getWomensSizes,
  getEuSizes,
};
