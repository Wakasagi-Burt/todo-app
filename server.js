const express = require("express");
const app = express();
const sequelize = require('./config/connection');
const controllers = require("./controllers")

const Model = require("./models");

const PORT = process.env.PORT || 3001;

app.use("/api", controllers);

// app.get('/', (req, res) => {
//     res.json("hi");
// });

sequelize.sync().then(() => {
    app.listen(PORT, () => {
    console.log("I'm Running");
    });
});

