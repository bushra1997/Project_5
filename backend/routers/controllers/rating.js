const connection = require("../../db/db");

const createNewRating = (req, res) => {
  const { place_id, user_id, rate } = req.body;

  const query = `INSERT INTO rating(place_id ,user_id,rate)VALUES(?,?,?)`;
  const data = [place_id, user_id, rate];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};


const getRating = (req, res) => {
  const { place_id, user_id } = req.body;

  const query = `SELECT * FROM project_5.rating WHERE place_id =? AND user_id =?;`;
  const data = [place_id, user_id];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

// SELECT 
//     AVG(buyprice) 'Average Price'
// FROM
//     products;
// const averageRating = (req, res) => {
//   const { place_id } = req.params;
//   console.log({place_id}, req.params);

//   const query = `SELECT AVG(rate) AS 'Average_rating' FROM rating WHERE place_id =? ;`;
//   const data = [place_id];
//   connection.query(query, data, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// };

const averageRating = (req, res) => {
  const { place_id } = req.params;
  console.log({place_id}, req.params);

  const query = `SELECT AVG(rate) AS 'Average_rating' FROM rating WHERE place_id =? ;`;
  const data = [place_id];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};


module.exports = {
  createNewRating,
  getRating,
  averageRating
};
