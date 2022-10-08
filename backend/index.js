const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
var bodyParser = require("body-parser");
const port = "3001";

// create application/json parser
var jsonParser = bodyParser.json();

// Configuration database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "policefeedback",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to MySQL Server");
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



// listen to port
app.listen(port, (err) => {
  console.log(err, port);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});