/* eslint-disable no-console */
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const cors = require('cors');
// const db = require('../database/index.js');
require('newrelic');
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
// const db = require('../database/index.js');
const app = express();
const port = process.env.LOCAL_PORT;

// helpers

const strToArr = (str) => {
  let result = [];
  let parsed = str.split(',');
  for (let i = 0; i < parsed.length; i++) {
    if (i === 0) {
      let entry = parsed[i].split('{');
      entry = entry[1];
      result.push(entry);
    } else if (i === parsed.length - 1) {
      let entry = parsed[i].split('}');
      entry = entry[0];
      result.push(entry);
    } else {
      result.push(parsed[i]);
    }
  }
  return result;
};
// Middleware

app.use(cors());
app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error(err);
  }
  global.db = client.db('descriptions');
  app.listen(port, (error) => {
    if (err) console.log(error);
    console.log(`listening on port ${port}`);
  });
});

app.get('/descriptions', (req, res) => {
  const collection = db.collection('descriptiondata');
  let query = {};
  query.id = Math.floor(Math.random() * 9999999 + 1);
  collection.find(query).toArray((error, items) => {
    res.send(items[0]);
  });
});


app.get('/mensSizes', (req, res) => {
  const collection = db.collection('shoeslist');
  collection.find({ name: 'mensSizes' }).toArray((error, items) => {
    const response = strToArr((items[0].sizes));
    res.send(response);
  });
});

app.get('/euSizes', (req, res) => {
  const collection = db.collection('shoeslist');
  collection.find({ name: 'euSizes' }).toArray((error, items) => {
    const response = strToArr((items[0].sizes));
    res.send(response);
  });
});

app.get('/womensSizes', (req, res) => {
  const collection = db.collection('shoeslist');
  collection.find({ name: 'womensSizes' }).toArray((error, items) => {
    const response = strToArr((items[0].sizes));
    res.send(response);
  });
});


// app.get('/descriptions', (req, res) => {
//   db.getDescriptions((err, result) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(400);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.get('/mensSizes', (req, res) => {
//   db.getMensSizes((err, result) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(400);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.get('/womensSizes', (req, res) => {
//   db.getWomensSizes((err, result) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(400);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.get('/euSizes', (req, res) => {
//   db.getEuSizes((err, result) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(400);
//     } else {
//       res.send(result);
//     }
//   });
// });