/* eslint-disable func-names */
import "regenerator-runtime/runtime";
const MongoClient = require('mongodb').MongoClient;

const url = process.env.DATABASE_URL;

function connect(url) {
  return MongoClient.connect(url, { useNewUrlParser: true }).then(client => client.db('descriptions'));
}

module.exports = async function () {
  const databases = await Promise.all([connect(url)]);

  return {
    connection: databases[0],
  };
};
