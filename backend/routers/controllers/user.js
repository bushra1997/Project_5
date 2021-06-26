const db = require("../../db/db");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

const CreateNewUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const alert = errors.array();
    res.json(alert);
  } else {
    const { firstName, lastName, age, country, email, password, role_id } =
      req.body;

    const query = `INSERT INTO users (firstName,lastName,age,country,email,password,role_id) VALUES (?,?,?,?,?,?,?)`;
    const data = [firstName, lastName, age, country, email, password, role_id];
    db.query(query, data, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  }
};

module.exports = { CreateNewUser };
