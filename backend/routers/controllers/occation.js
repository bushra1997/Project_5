const connection = require("../../db/db");
const CreateNewOccation = (req, res) => {
  const { place_id, type } = req.body;

  const query = `INSERT INTO occasions(place_id,type )VALUES(?,?)`;
  const data = [place_id, type];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
module.exports = {
  CreateNewOccation,
};
