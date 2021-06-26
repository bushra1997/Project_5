const db = require("../../db/db");

const CreateNewUser = (req, res) => {
  const { firstName, lastName, age, country, email, password, role_id } =
    req.body;
  const query = `INSERT INTO users (firstName,lastName,age,country,email,password,role_id) VALUES (?,?,?,?,?,?,?)`;
  const data = [firstName, lastName, age, country, email, password, role_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

module.exports={CreateNewUser};
