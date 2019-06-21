/* eslint-disable func-names */
import renderPage from '../../iso-middleware/render.jsx';

// helpers
const strToArr = (str) => {
  const result = [];
  const parsed = str.split(',');
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

const getDescriptions = (cb) => {
  const db = global.db.db('descriptions');
  const randy = Math.floor(Math.random() * 10000000 + 1);
  const query = {};
  query.id = randy;
  db.collection('descriptiondata').find(query).toArray((err, items) => {
    if (err) {
      return console.log(err);
    }
    return cb(null, items[0]);
  });
};

const getMensSizes = (cb) => {
  const db = global.db.db('descriptions');
  db.collection('shoeslist').find({ name: 'mensSizes' }).toArray((err, items) => {
    if (err) {
      return console.log(err);
    }
    const response = strToArr((items[0].sizes));
    cb(null, response);
  });
};

const getWomensSizes = (cb) => {
  const db = global.db.db('descriptions');
  db.collection('shoeslist').find({ name: 'womensSizes' }).toArray((err, items) => {
    if (err) {
      return console.log(err);
    }
    const response = strToArr((items[0].sizes));
    cb(null, response);
  });
};

const getEuSizes = (cb) => {
  const db = global.db.db('descriptions');
  db.collection('shoeslist').find({ name: 'euSizes' }).toArray((err, items) => {
    if (err) {
      return console.log(err);
    }
    const response = strToArr((items[0].sizes));
    cb(null, response);
  });
};
// const routes = function routes(app, dbs) {
//   app.get('*.js', (req, res, next) => {
//     req.url = req.url + '.gz';
//     res.set('Content-Encoding', 'gzip');
//     next();
//   });
//   app.get('/descriptions', (req, res) => {
//     const randy = Math.floor(Math.random() * 10000000 + 1);
//     const query = {};
//     query.id = randy;
//     dbs.connection.collection('descriptiondata').find(query).toArray((err, items) => {
//       if (err) {
//         console.log(err);
//         res.error(err);
//       } else {
//         res.send(items[0]);
//       }
//     });
//   });
//   app.get('/mensSizes', (req, res, next) => {
//     dbs.connection.collection('shoeslist').find({ name: 'mensSizes' }).toArray((err, items) => {
//       if (err) {
//         console.log(err);
//         res.error(err);
//       } else {
//         const response = strToArr((items[0].sizes));
//         res.send(response);
//       }
//     });
//   });
//   app.get('/euSizes', (req, res, next) => {
//     dbs.connection.collection('shoeslist').find({ name: 'euSizes' }).toArray((err, items) => {
//       if (err) {
//         console.log(err);
//         res.error(err);
//       } else {
//         const response = strToArr((items[0].sizes));
//         res.send(response);
//       }
//     });
//   });
//   app.get('/womensSizes', (req, res, next) => {
//     dbs.connection.collection('shoeslist').find({ name: 'womensSizes' }).toArray((err, items) => {
//       if (err) {
//         console.log(err);
//         res.error(err);
//       } else {
//         const response = strToArr((items[0].sizes));
//         res.send(response);
//       }
//     });
//   });
//   app.get('*', renderPage);
//   return app;
// };

module.exports = {
  getDescriptions,
  getEuSizes,
  getMensSizes,
  getWomensSizes,
};
