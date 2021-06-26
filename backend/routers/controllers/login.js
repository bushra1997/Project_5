const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async(req,res){

    let { email, password } = req.body;

    
		const query=('SELECT * FROM users WHERE email = ?');
        email = await email.toLowerCase();
        if (email) {
            console.log("Email = ",email);
    
}
}

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


module.exports{
    login
}