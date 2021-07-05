const connection = require("../../db/db");
const createSearch = (req, res) => {
  const {name} = req.params;
  const query = `SELECT * FROM place WHERE (name=? AND ) OR ()`;
  const data = [name];
  connection.query(query, data, (err, result) => {
      console.log("result :",result);
    if (err) throw err;
    res.json(result);
  });
};
module.exports = {
  createSearch,
};