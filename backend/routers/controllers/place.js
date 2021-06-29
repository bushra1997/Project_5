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

const getAllPlaces = (req, res) => {
  const query = `SELECT * FROM place`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const updatePlaceById = (req, res) => {
  const id = req.params.id;
  const { name, description,img,capacity,city, address,availability} = req.body;
  const data =[name, description,img,capacity,city, address,availability]
  const query=`UPDATE place SET name=?,description=?,img=?,capacity=?,city=?,address=?,availability=? WHERE id =${id} `;
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const deletePlaceById = (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM place 
    WHERE id =${id} `;
    connection.query(query, id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getPlaceById = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM place 
      WHERE id =? `;
      connection.query(query, [id], (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  };

module.exports = {
  CreateNewPlace,
  getAllPlaces,
  updatePlaceById,
  deletePlaceById,
  getPlaceById
};
