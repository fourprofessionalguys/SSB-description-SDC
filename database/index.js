const { Pool } = require('pg');

const pool = new Pool({
  user: 'rei',
  host: 'localhost',
  database: 'descriptions',
  password: 'rei-dev',
  port: 5432,
});

const getDescriptions = (cb) => {
  pool.query('SELECT * FROM descriptionData WHERE name = \'La Sportiva Tarantulace Climbing Shoes\'', (error, results) => {
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
