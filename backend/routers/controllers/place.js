const connection = require("../../db/db");
const CreateNewPlace = (req, res) => {
  const { name, description, img, capacity, city, address, availability } =
    req.body;
  const query = `INSERT INTO place(name,description,img,capacity,city,address,availability)VALUES(?,?,?,?,?,?,?)`;
  const data = [name, description, img, capacity, city, address, availability];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getAllPlaces=(req,res)=>{
    const { name, description, img, capacity, city, address, availability } =
    req.body;
  const query = `INSERT INTO place(name,description,img,capacity,city,address,availability)VALUES(?,?,?,?,?,?,?)`;
  const data = [name, description, img, capacity, city, address, availability];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
}


module.exports = {
  CreateNewPlace,
};

