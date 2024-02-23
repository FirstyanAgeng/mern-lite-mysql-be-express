const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "",
  database: "fullstack_basic",
});

db.connect(function () {
  console.log("database berhsil terkoneksi");
});

module.exports = db;
