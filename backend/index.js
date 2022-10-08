const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
var bodyParser = require("body-parser");
const port = "3001";
const otpGenerator = require('otp-generator');
const sha512 = require('sha512'); 

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

let otp;

function saveOTP(given){
  otp = given;
}

//listen mobile number
app.post('/mobile', (req, res) => {
  let mobile = req.body.mobile;
  let err; 
  try{
    mobile = parseInt(mobile);
    if((""+ mobile).length === 10){
      let generatedOTP = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false })
      saveOTP(generatedOTP);
      console.log(generatedOTP);
      res.send({OTP: generatedOTP});
    }
    else{
      err = "Mobile number must have 10 number digits";
    }
  }
  catch{
    err = "Mobile number is not numeric";
  }
  res.send(err);
})


//check otp
app.post('/check-otp', (req, res) => {
  let otpReceived = req.body.otp;
  let err; 
  try{
    otpReceived = parseInt(otpReceived);
    if((""+ otpReceived).length === 6 && otpReceived ==  otp){
      res.send(true);
    }
    else{
      err = "otp number must have 6 number digits";
    }
  }
  catch{
    err = "otp number is not numeric";
  }
  res.status(400);
  res.send(err);
})

//login check admin
app.post('/admin-login', (req, res) => {
  let sql = `SELECT * FROM officer WHERE officer_email = '${req.body.email}' AND officer_password = '${req.body.password}' AND admin = 1`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
})

//get all station
app.get('/getStation', (req, res)=>{
  let sql = `SELECT station_name FROM station `;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
})


// listen to port
app.listen(port, (err) => {
  console.log(err, port);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "6LclcGMiAAAAABnAWnrQ0kLvwY-5HJTSQoLbK3Uy");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});