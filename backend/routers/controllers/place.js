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
  const { name, description, img, capacity, city, address, availability } =
    req.body;
  const data = [name, description, img, capacity, city, address, availability];
  const query = `UPDATE place SET name=?,description=?,img=?,capacity=?,city=?,address=?,availability=? WHERE id =${id} `;
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const deletePlaceById = (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM place WHERE id =${id}`;
  connection.query(query,(err, result) => {
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

const getPlaceByType = (req, res) => {
  const type = req.params.type;
  const query = `SELECT *
    FROM place 
    INNER JOIN occasions
    ON  place.id = occasions.place_id
    WHERE type = ?;
    `;
  connection.query(query, [type], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getPlaceByTypeImg = (req, res) => {
  const type = req.params.type;
  const query = `SELECT img ,description,city,address
    FROM place 
    INNER JOIN occasions
    ON  place.id = occasions.place_id
    WHERE type = ?;
    `;
  connection.query(query, [type], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getAllPlacesImg = (req, res) => {
  const query = `SELECT img
    FROM place`;

  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log(result);
  });
};

const getAllPlacesByName = (req, res) => {
  const name = req.params.name;
  const query = `SELECT *
  FROM place 
  INNER JOIN occasions
  ON  place.id = occasions.place_id
  WHERE name LIKE ?;
  `;
 const nameSearched = [`%${name}%`]
  connection.query(query,nameSearched, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log(result);
  });
};





module.exports = {
  CreateNewPlace,
  getAllPlaces,
  updatePlaceById,
  deletePlaceById,
  getPlaceById,
  getPlaceByType,
  getPlaceByTypeImg,
  getAllPlacesImg,
  getAllPlacesByName,
};
