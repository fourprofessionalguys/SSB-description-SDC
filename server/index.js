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
const db = require('../database/index.js');
const initialize = require('../database/mongoIndex.js');
const routes = require('./mongoroutes/index.js');

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
  initialize().then((dbs) => {
    routes(app, dbs).listen(port, () => console.log('Listening on port 3003'));
  }).catch((err) => {
    console.error('Failed to make all database connections!');
    console.error(err);
    process.exit(1);
  });
}
if (process.env.DATABASE_TYPE === 'psql') {
  app.get('/descriptions', (req, res) => {
    db.getDescriptions((err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        res.send(result);
      }
    });
  });
  app.get('/mensSizes', (req, res) => {
    db.getMensSizes((err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        res.send(result);
      }
    });
  });
  app.get('/womensSizes', (req, res) => {
    db.getWomensSizes((err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        res.send(result);
      }
    });
  });
  app.get('/euSizes', (req, res) => {
    db.getEuSizes((err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      } else {
        res.send(result);
      }
    });
  });
}
