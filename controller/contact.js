const contacts = require("../model/Contact");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({ status: 200, payload: "api ready" });
});

router.get("/contacts", function (req, res) {
  contacts.getAll(req, res);
});

router.get("/contacts/:id", function (req, res) {
  contacts.getOne(req, res);
});

router.post("/contacts", function (req, res) {
  contacts.add(req, res);
});

router.put("/contacts/:id", function (req, res) {
  contacts.edit(req, res);
});

router.delete("/contacts/:id", function (req, res) {
  contacts.delete(req, res);
});

// router.get("/karyawan", function (req, res) {
//   contacts.getAllKar(req, res);
// });

module.exports = router;
