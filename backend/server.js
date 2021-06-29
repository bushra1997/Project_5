const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//routers
const roleRouter = require("./routers/routes/role");
const sliderRouter = require("./routers/routes/slider");
const favoriteRouter = require("./routers/routes/favorite");
const userRouter = require("./routers/routes/user");
const ratingRouter = require("./routers/routes/rating");
const loginRouter = require("./routers/routes/login");
const placeRouter = require("./routers/routes/place");

// router middleware
app.use("/role", roleRouter);
app.use("/slider", sliderRouter);
app.use("/favorite", favoriteRouter);
app.use("/user", userRouter);
app.use("/rating", ratingRouter);
app.use("/login", loginRouter);
app.use(placeRouter);
//app routers

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
