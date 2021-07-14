const db = require("../../db/db");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const CreateNewUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const alert = errors.array();
    console.log(alert[0].msg,"SSSSSSSSSSSSSSSSS");
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
      console.log('oooooooooooooooooo',result);
      if (err) throw err
      //   res.status(400).json(err);
      //   return;
      // }
      res.status(201).json(result);
    });
  }
};

const AddUserImage=(req,res)=>{

  const { user_id, user_image } = req.body;

  const query = `INSERT INTO userimage(user_id,user_image )VALUES(?,?)`;
  const data = [user_id, user_image];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json("Sucsses");
  });

}
const GetUserImage=(req,res)=>{

  const {user_id} = req.body;

  const query = `SELECT * FROM userimage WHERE user_id =?`;
  db.query(query, user_id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });

}

module.exports = { CreateNewUser,AddUserImage,GetUserImage };
