const db = require("../../db/db");

const allFavorite = (req, res) => {
  const user_id= req.params.id;
  const query = `SELECT *
  FROM place 
  INNER JOIN favorite
  ON  place.id = favorite.place_id
  WHERE user_id =(?);`;
  db.query(query,user_id,(err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const CreateNewFavorate = (req, res) => {
  const { place_id, user_id, rating_id } = req.body;
  const query = `INSERT INTO favorite (place_id,user_id,rating_id) VALUES (?,?,?)`;
  const data = [place_id, user_id, rating_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
const DeleteFavorate = (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM favorite WHERE place_id=(?) `;
  const data = [id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const checkFavorite = (req,res) => {
  console.log(req.body);
  const { place_id, user_id } = req.body;
  const query = `SELECT * FROM favorite WHERE place_id =? AND user_id =?`;
  const data = [place_id, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};

module.exports = {
  CreateNewFavorate,
  DeleteFavorate,
  allFavorite,
  checkFavorite,
};
