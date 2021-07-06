const connection = require("../../db/db");
const createSearch = (req, res) => {
  const {name} = req.params;
  const query = `SELECT * FROM place WHERE name=?`;
  connection.query(query, name, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
module.exports = {
  createSearch,
};