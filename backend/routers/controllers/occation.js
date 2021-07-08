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
const place_id=req.body;
const query =`DELETE FROM occasions WHERE place_id =?`;
connection.query(query,place_id,(err,result) => {

  if(err) throw err;
  res.json(result)
});


};
module.exports = {
  CreateNewOccation,
  DeleteFromOccasions,
};
