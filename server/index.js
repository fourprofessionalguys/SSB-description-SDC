/* eslint-disable no-console */
import renderPage from '../iso-middleware/render.jsx';

require('newrelic');
require('dotenv').config();

const express = require('express');
const ReactDOMServer = require('react-dom/server');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const database = require('./mongoroutes/index.js');
const psqlDB = require('../database/index.js');
// const initialize = require('../database/mongoIndex.js');
// const routes = require('./mongoroutes/index.js');

const app = express();
const port = process.env.LOCAL_PORT;

// Middleware

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const buildPath = path.join(__dirname, '../', 'build');
app.use('/', express.static(buildPath));
app.use(express.static(__dirname));


if (process.env.DATABASE_TYPE === 'mongo') {
  app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });
  app.get('/descriptions', (req, res) => {
    database.getDescriptions((err, data) => {
      if (err) {
        res.status(400)
          .json({ message: err });
      }
      res.send(data);
    });
  });
  app.get('/mensSizes', (req, res, next) => {
    database.getMensSizes((err, data) => {
      if (err) {
        res.status(400)
          .json({ message: err });
      }
      res.send(data);
    });
  });
  app.get('/euSizes', (req, res, next) => {
    database.getEuSizes((err, data) => {
      if (err) {
        res.status(400)
          .json({ message: err });
      }
      res.send(data);
    });
  });
  app.get('/womensSizes', (req, res, next) => {
    database.getWomensSizes((err, data) => {
      if (err) {
        res.status(400)
          .json({ message: err });
      }
      res.send(data);
    });
  });
  app.get('*', renderPage);
}
if (process.env.DATABASE_TYPE === 'psql') {
  app.get('/descriptions', (req, res) => {
    psqlDB.getDescriptions((err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        res.send(result);
      }
    });
  });
  app.get('/mensSizes', (req, res) => {
    psqlDB.getMensSizes((err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        res.send(result);
      }
    });
  });
  app.get('/womensSizes', (req, res) => {
    psqlDB.getWomensSizes((err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        res.send(result);
      }
    });
  });
  app.get('/euSizes', (req, res) => {
    psqlDB.getEuSizes((err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        res.send(result);
      }
    });
  });
}
MongoClient.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    return console.error(err);
  }
  global.db = db;
  app.listen(port, () => {
    console.log(`Listening on localhost:${port} with Mongo in ${process.env.NODE_ENV} mode`);
  });
});
