/* eslint-disable func-names */
const MongoClient = require('mongodb').MongoClient;

const url1 = process.env.DATABASE_URL1;
const url2 = process.env.DATABASE_URL2;
const url3 = process.env.DATABASE_URL3;
const url4 = process.env.DATABASE_URL4;

function connect(url) {
  return MongoClient.connect(url, {useNewUrlParser: true }).then(client => client.db('descriptions'));
}

module.exports = async function () {
  let databases = await Promise.all([connect(url1), connect(url2), connect(url3), connect(url4)])

  return {
    connection1: databases[0],
    connection2: databases[1],
    connection3: databases[2],
    connection4: databases[3],
  };
};
