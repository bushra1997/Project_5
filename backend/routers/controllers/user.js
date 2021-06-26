const db = require("../../db/db");
const bcrypt =require("bcrypt");

const CreateNewUser = async(req, res) => {
  let salt=10;
  let { firstName, lastName, age, country, email, password, role_id } =
    req.body;
  const query = `INSERT INTO users (firstName,lastName,age,country,email,password,role_id) VALUES (?,?,?,?,?,?,?)`;
  password = await bcrypt.hash(password, salt)
  email = await email.toLowerCase()
  const data = [firstName, lastName, age, country, email, password, role_id];
   db.query(query, data, (err, result) => {
    if (err) throw new Error(`hhhhhhhhhhhh ${err}`);
    console.log("rrrrrrrrrrrrrr: ", result);
    
    console.log("passsssssssssssss",password);
    res.json(result);
  });
};

module.exports={CreateNewUser};
