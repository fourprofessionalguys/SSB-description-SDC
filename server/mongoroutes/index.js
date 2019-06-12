/* eslint-disable func-names */

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

const routes = function routes(app, dbs) {
  app.get('/descriptions', (req, res) => {
    const randy = Math.floor(Math.random() * 10000000 + 1);
    if (randy > 0 && randy <= 2500000) {
      let query1 = {};
      query1.id = randy;
      dbs.connection1.collection('descriptiondata').find(query1).toArray((err, items) => {
        if (err) {
          console.log(err);
          res.error(err)
        } else {
          res.send(items[0]);
        }
      });
    }
    if (randy > 2500000 && randy <= 5000000) {
      let query2 = {};
      query2.id = randy;
      dbs.connection2.collection('descriptiondata').find(query2).toArray((err, items) => {
        if (err)  {
          console.log(err);
          res.error(err);
        } else {
          res.send(items[0]);
        }
      });
    }
    if (randy > 5000000 && randy <= 7500000) {
      let query3 = {};
      query3.id = randy;
      dbs.connection3.collection('descriptiondata').find(query3).toArray((err, items) => {
        if (err)  {
          console.log(err);
          res.error(err);
        } else {
          res.send(items[0]);
        } 
      });
    }
    if (randy > 7500000 && randy <= 10000000) {
      let query4 = {};
      query4.id = randy;
      dbs.connection4.collection('descriptiondata').find(query4).toArray((err, items) => {
        if (err)  {
          console.log(err);
          res.error(err);
        } else {
          res.send(items[0]);
        }
      });
    }
  });
  app.get('/mensSizes', (req, res) => {
    dbs.connection1.collection('shoeslist').find({ name: 'mensSizes' }).toArray((err, items) => {
      if (err)  {
        console.log(err);
        res.error(err);
      } else {
        const response = strToArr((items[0].sizes));
        res.send(response);
      }
    });
  });
  app.get('/euSizes', (req, res) => {
    dbs.connection1.collection('shoeslist').find({ name: 'euSizes' }).toArray((err, items) => {
      if (err)  {
        console.log(err);
        res.error(err);
      } else {
        const response = strToArr((items[0].sizes));
        res.send(response);
      }  
    });
  });

  app.get('/womensSizes', (req, res) => {
    dbs.connection1.collection('shoeslist').find({ name: 'womensSizes' }).toArray((err, items) => {
      if (err)  {
        console.log(err);
        res.error(err);
      } else {
        const response = strToArr((items[0].sizes));
        res.send(response);
      }  
    });
  });
  return app;
};

module.exports = routes;
