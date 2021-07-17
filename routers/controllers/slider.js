const connection = require("../../db/db");
const createNewSlider = (req, res) => {
  const { img, place_id } = req.body;
  const query = `INSERT INTO slider(img,place_id)VALUES(?,?)`;
  const data = [img, place_id];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
module.exports = {
  createNewSlider,
};
