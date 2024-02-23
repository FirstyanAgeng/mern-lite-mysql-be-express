const db = require("../config/db");

exports.getAll = (req, res) => {
  const Query = "SELECT * FROM contacts";
  db.query(Query, function (error, results) {
    res.json({ status: 200, payload: results });
  });
};

exports.getOne = (req, res) => {
  const contactId = req.params.id; // Extract the contact ID from request parameters

  const query = `SELECT * FROM contacts WHERE id = ${contactId}`; // Query to select a contact by its ID

  db.query(query, function (error, results) {
    if (error) {
      console.error("Error fetching contact by ID:", error);
      res.status(500).json({ status: 500, error: "Internal server error" });
    } else {
      if (results.length === 0) {
        res.status(404).json({ status: 404, error: "Contact not found" }); // Contact with given ID not found
      } else {
        res.json({ status: 200, payload: results[0] }); // Return the first (and only) result as the payload
      }
    }
  });
};

exports.getAllKar = (req, res) => {
  const Query = "SELECT * FROM karyawan";
  db.query(Query, function (error, results) {
    res.json({ status: 200, payload: results });
  });
};

exports.add = (req, res) => {
  const Query = `INSERT INTO contacts SET fullname = '${req.body.fullname}', phone = '${req.body.phone}',  note = '${req.body.note}'`;
  db.query(Query, function (error, results) {
    res.json({ status: 200, payload: results });
  });
};

exports.edit = (req, res) => {
  const contactId = req.params.id;
  const { fullname, phone, note } = req.body;

  const query = `UPDATE contacts SET fullname = '${fullname}', phone = '${phone}', note = '${note}' WHERE id = ${contactId}`;

  db.query(query, function (error, results) {
    if (error) {
      console.error("Error editing contact:", error);
      res.status(500).json({ status: 500, error: "Internal server error" });
    } else {
      res.json({ status: 200, message: "Contact updated successfully" });
    }
  });
};

exports.delete = (req, res) => {
  const contactId = req.params.id;

  const query = `DELETE FROM contacts WHERE id = ${contactId}`;

  db.query(query, function (error, results) {
    if (error) {
      console.error("Error deleting contact:", error);
      res.status(500).json({ status: 500, error: "Internal server error" });
    } else {
      if (results.affectedRows === 0) {
        res.status(404).json({ status: 404, error: "Contact not found" }); // Contact with given ID not found
      } else {
        res.json({ status: 200, message: "Contact deleted successfully" });
      }
    }
  });
};

// exports.add = (req, res) => {
//   const sqlQuery = `INSERT INTO contact SET fullname = '${req.body.fullname}', phone = ${req.body.phone}, note = '${req.body.note}' `;
//   db.query(sqlQuery, function (err, results) {
//     res.json({ status: 200, payload: results });
//   });
// };
