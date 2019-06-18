/* eslint-disable no-console */

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
app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
