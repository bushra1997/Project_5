const db = require("../../db/db");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const CreateNewUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const alert = errors.array();
    res.json(alert);
  } else {
    let salt = 10;
    let { firstName, lastName, age, country, email, password, role_type } =
      req.body;
    const query = `INSERT INTO users (firstName,lastName,age,country,email,password,role_type) VALUES (?,?,?,?,?,?,?)`;
    password = await bcrypt.hash(password, salt);
    email = await email.toLowerCase();
    const data = [
      firstName,
      lastName,
      age,
      country,
      email,
      password,
      role_type,
    ];
    db.query(query, data, (err, result) => {
      if (err) {
        res.status(400).json(err);
        return;
      }
      res.status(201).json(result);
    });
  }
};

module.exports = { CreateNewUser };
