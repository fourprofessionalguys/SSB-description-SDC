const faker = require('faker');
const { pool } = require('./index');

const seed = () => {
  let i = 0;
  while (i < 100) {
    let arr = [];
    if (i === 0) {
      arr = ['La Sportiva Tarantulace Climbing Shoes', 'Rock Climbing', 'Neutral', 'Slip-Lasted', 'Leather/synthetic leather', 'No', 'FriXion RS rubber', 'Lace-up', 'Yes', 'Unisex', '1 lb. 2.3 oz.']
      pool.query('INSERT INTO descriptionData (name_, best_use, climbing_show_type, last_, upper_, lining_, outsole_, footwear_closure, resole_, gender_, weight_) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', arr, (error) => {
        if (error) { throw error; }
      });
      i += 1;
    } else {
      for (let j = 0; j < 11; j += 1) {
        arr.push(faker.lorem.word());
      }
      pool.query('INSERT INTO descriptionData (name_, best_use, climbing_show_type, last_, upper_, lining_, outsole_, footwear_closure, resole_, gender_, weight_) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', arr, (error) => {
        if (error) { throw error; }
      });
      i += 1;
    }
  }
};

///test

seed();
