const faker = require('faker');
const { pool } = require('./index');

const seed = () => {
  let i = 0;
  while (i < 100) {
    let arr = [];
    if (i === 0) {
      arr = ['La Sportiva Tarantulace Climbing Shoes', 'Rock Climbing', 'Neutral', 'Slip-Lasted', 'Leather/synthetic leather', 'No', 'FriXion RS rubber', 'Lace-up', 'Yes', 'Unisex', '1 lb. 2.3 oz.', 'Designed for the climber looking for a single pair to do it all, the La Sportiva Tarantulace are jack-of-all-trades climbing git shoes comfortable enough for all-day climbs or a trip to the rock gym.'];
      pool.query('INSERT INTO descriptionData (name, bestUse, climbingShoeType, last, upper, lining, outsole, footwearClosure, resole, gender, weight, quote) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', arr, (error) => {
        if (error) { throw error; }
      });
      i += 1;
    } else {
      for (let j = 0; j < 12; j += 1) {
        arr.push(faker.lorem.word());
      }
      pool.query('INSERT INTO descriptionData (name, bestUse, climbingShoeType, last, upper, lining, outsole, footwearClosure, resole, gender, weight, quote) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', arr, (error) => {
        if (error) { throw error; }
      });
      i += 1;
    }
  }
  let k = 0;
  while (k < 50) {
    const mensSizes = ['mensSizes', ['4', '4.5', '4.5+', '5', '5.5', '6', '6.5', '6.5+', '7', '7.5', '8', '8.5', '8.5+', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '12.5+', '13', '14']];
    const womensSizes = ['womensSizes', ['5', '5.5', '5.5+', '6', '6.5', '7', '7.5', '7.5+', '8', '8.5', '9', '9.5', '9.5+', '10', '10.5', '11', '11.5', '11.5+', '12', '12.5', '13', '13.5', '13.5+', '14']];
    const euSizes = ['euSizes', ['36', '36.5', '37', '37.5', '38', '38.5', '39', '39.5', '40', '40.5', '41', '41.5', '42', '42.5', '43', '43.5', '44', '44.5', '45', '45.5', '46', '46.5', '47', '48']];
    if (k === 0) {
      pool.query('INSERT INTO shoeSizes (name, sizes) VALUES ($1, $2)', mensSizes, (error) => {
        if (error) { throw error; }
      });
      pool.query('INSERT INTO shoeSizes (name, sizes) VALUES ($1, $2)', womensSizes, (error) => {
        if (error) { throw error; }
      });
      pool.query('INSERT INTO shoeSizes (name, sizes) VALUES ($1, $2)', euSizes, (error) => {
        if (error) { throw error; }
      });
      k = 3;
    } else {
      const shoeData = [];
      const shoeSizes = [];
      shoeData.push(faker.lorem.word());
      for (let m = 0; m < 24; m += 1) {
        shoeSizes.push((faker.random.number()).toString());
      }
      shoeData.push(shoeSizes);
      pool.query('INSERT INTO shoeSizes (name, sizes) VALUES ($1, $2)', shoeData, (error) => {
        if (error) { throw error; }
      });
      k += 1;
    }
  }
};

// /test

seed();
