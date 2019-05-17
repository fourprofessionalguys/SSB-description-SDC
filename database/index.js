const { Pool } = require('pg');

const pool = new Pool({
  user: 'rei',
  host: 'localhost',
  database: 'descriptions',
  password: 'rei-dev',
  port: 5432,
});

const getDescriptions = (cb) => {
  pool.query('SELECT * FROM descriptionData', (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(error, results.rows);
    }
  });
};

module.exports = {
  getDescriptions,
  pool,
};
