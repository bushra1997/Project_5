const db = require("../../db/db");
const CreateNewFavorate = (req, res) => {
  const { place_id, user_id } = req.body;
  const query = `INSERT INTO favorite (place_id,user_id) VALUES (?,?)`;
  const data = [user_id, place_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};
const DeleteFavorate = (req, res) => {
  const { id } = req.body;
  const query = `DELETE FROM favorite WHERE id=(?) `;
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
