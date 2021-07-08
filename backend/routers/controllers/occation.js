const connection = require("../../db/db");
const CreateNewOccation = (req, res) => {
  const { place_id, type } = req.body;

  const query = `INSERT INTO occasions(place_id,type )VALUES(?,?)`;
  const data = [place_id, type];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const DeleteFromOccasions = (req,res) =>{
console.log("PPPPPPPPPPPPPPPPPPPP",req.body);
const data=req.params.place_id
const query =`DELETE FROM occasions WHERE place_id =?`;
connection.query(query,data,(err,result) => {

  if(err) throw err;
  res.json(result)
});
}
const DeleteFromFavorite = (req,res) =>{
const data=req.params.place_id
const query =`DELETE FROM favorite WHERE place_id =?`;
connection.query(query,data,(err,result) => {

  if(err) throw err;
  res.json(result)
});
}

const DeleteFromRating = (req,res) =>{
const data=req.params.place_id
const query =`DELETE FROM rating WHERE place_id =?`;
connection.query(query,data,(err,result) => {

  if(err) throw err;
  res.json(result)
});


};

module.exports = {
  CreateNewOccation,
  DeleteFromOccasions,
  DeleteFromFavorite,
  DeleteFromRating,
};
