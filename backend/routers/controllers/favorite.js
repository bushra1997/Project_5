const db = require("../../db/db");

const allFavorite=(req,res)=>{
  const query = `SELECT * FROM favorite`
  db.query(query,(err, result) => {
    if (err) throw err;
    res.json(result);
  });
}
const CreateNewFavorate = (req, res) => {
  const { place_id, user_id,rating_id } = req.body;
  const query = `INSERT INTO favorite (place_id,user_id,rating_id) VALUES (?,?,?)`;
  const data = [ place_id,user_id,rating_id];
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
module.exports = {
  CreateNewFavorate,
  DeleteFavorate,
};
