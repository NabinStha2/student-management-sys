const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hello124@",
  database: "nodemysql",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});

//CREATE DATABASE
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send("Database Created...");
  });
});

//CREATE TABLE
app.get("/createstudenttable", (req, res) => {
  let sql =
    "CREATE TABLE students(rollno INT NOT NULL, firstname VARCHAR(50),lastname VARCHAR(50),name VARCHAR(100) AS (CONCAT(firstname,' ',lastname)),age INT, email VARCHAR(50),faculty VARCHAR(50) NOT NULL, semester VARCHAR(50) NOT NULL, parentName VARCHAR(50),college VARCHAR(50) NOT NULL,batch VARCHAR(255) NOT NULL,dob DATE,id VARCHAR(255) AS (CONCAT(college,batch,faculty,rollno)) UNIQUE)";

  db.query(sql, (err, result) => {
    if (err) throw err;

    // console.log(result);
    res.send(result);
  });
});

//INSERT STUDENT
app.get("/addstudent", (req, res) => {
  const {
    firstname,
    lastname,
    rollno,
    age,
    dob,
    email,
    faculty,
    semester,
    parentName,
    batch,
    college,
  } = req.query;

  let newStudent = {
    firstname,
    lastname,
    rollno,
    age,
    email,
    dob: dob.split("T")[0],
    faculty,
    semester,
    parentName,
    batch,
    college,
  };

  let sql = "INSERT INTO students SET ?";
  let query = db.query(sql, newStudent, (err, result) => {
    if (err) throw err;

    // console.log(result);
    res.json({ message: "Student Added...", data: result });
  });
});

//SELECT STUDENTS
app.get("/getstudents", (req, res) => {
  let sql = "SELECT * FROM students";
  let query = db.query(sql, (err, result) => {
    if (err) throw err;

    // console.log(result);
    res.json({ message: "Students Fetched...", data: result });
  });
});

//SELECT SINGLE STUDENT
app.get("/getstudentbyfilter", (req, res) => {
  console.log(req.query);
  let sql = `SELECT * FROM students WHERE name LIKE '${req.query.name}%' AND id LIKE '${req.query.id}%' AND college LIKE '${req.query.college}%' AND semester LIKE '${req.query.semester}%' AND faculty LIKE '${req.query.faculty}%'`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;

    // console.log(result);
    res.json({ message: "Student Fetched...", data: result });
  });
  // console.log(query);
});

//UPDATE STUDENT
app.get("/updatestudent/:id", (req, res) => {
  const {
    firstname,
    lastname,
    rollno,
    age,
    dob,
    email,
    faculty,
    semester,
    parentName,
    batch,
    college,
  } = req.query;

  let updatedStudent = {
    firstname,
    lastname,
    rollno,
    age,
    email,
    dob: dob.split("T")[0],
    faculty,
    semester,
    parentName,
    batch,
    college,
  };
  console.log(updatedStudent, req.params.id);

  let sql = `UPDATE students SET ? WHERE id = '${req.params.id}'`;
  db.query(sql, updatedStudent, (err, result) => {
    if (err) throw err;

    // console.log(result);
    res.json({ message: "Student Updated...", data: result });
  });
});

//DELETE STUDENT
app.get("/deletestudent/:id", (req, res) => {
  // console.log(req.params.id);
  let sql = `DELETE FROM students WHERE id = '${req.params.id}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;

    // console.log(result);
    res.json({ message: "Student Deleted...", data: result });
  });
});

//SEARCH BY ID
app.get("/searchStudent/:id", (req, res) => {
  console.log(req.params.id);
  let sql = `SELECT * FROM students WHERE id = '${req.params.id}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.json({ message: "Student Found", data: result });
  });
});

app.listen("5000", () => {
  console.log("Server has been started!!!");
});
