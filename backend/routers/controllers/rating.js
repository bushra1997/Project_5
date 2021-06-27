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
module.exports = {
  createNewRating,
};
