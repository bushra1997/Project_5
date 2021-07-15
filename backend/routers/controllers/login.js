const db = require("./../../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = `SELECT * FROM users WHERE email = ? ;`;
  const data = [email];

  db.query(query, data, async (err, result) => {
    if (!result[0]) {
      return res.status(404).json("the email dosnt exist");
    }
    const confirm = await bcrypt.compare(password, result[0].password);
    if (confirm) {
      const payload = {
        name: result[0].name,
        password: result[0].password,
      };
      const options = {
        expiresIn: "1d",
      };
      res.status(200).json({
        token: jwt.sign(payload, process.env.SECRET, options),
        user: result[0],
      });
    } else {
      res.status(403).json("The password is not correct");
    }
  });
};
module.exports = {
  login,
};
