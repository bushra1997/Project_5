const db = require("./../../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const query = `SELECT * FROM users WHERE email = ? ;`
    const data = [email];
  
    db.query(query, data, async(err, result) => {
      if (!result[0]) {
        return res.json("the email dosnt exist");
      }
      const confirm = await bcrypt.compare(password, result[0].password);
      if (confirm) {
        const payload = {
          name: result[0].name,
          password: result[0].password,
        };
        const options = {
          expiresIn: '1d',
        };
        res.status(200).json({ token: jwt.sign(payload, process.env.SECRET, options), message: "valid login", user: result[0] });
      }
      else { res.json('The password is not correct').status(403) }
    });
  
 

  //         if (email) {
  //             console.log("Email = ",email);

  // }
  // else{
  //     "email dose not ex"
  // }
};

//     const valid = await bcrypt.compare(password, user.password);
//       if (valid) {
//         const payload = {
//           userId: user._id,
//           role: user.role,
//         };

//     if (email) {
// 		connection.query('SELECT * FROM users WHERE email = ?'

//     try {
//       const user = await userModel.findOne({ email }).populate("role");
//       if (!email) {
//         res.status(404);
//         res.json({ message: "The email doesn't exist", status: 404 });
//         return;
//       }

//       const valid = await bcrypt.compare(password, user.password);
//       if (valid) {
//         const payload = {
//           userId: user._id,
//           role: user.role,
//         };

//         const options = {
//           expiresIn: "100h",
//         };

//         const token = jwt.sign(payload, process.env.SECRET, options);
//         res.status(200);
//         res.json({ token,role: user.role.role });
//         return;
//       }
//       res.status(403);
//       res.json({
//         message: "The password you’ve entered is incorrect",
//         status: 403,
//       });
//       return;
//     } catch (error) {
//       console.log(error)
//       throw new Error(error.message);
//     }
//   };

module.exports = {
  login,
};
