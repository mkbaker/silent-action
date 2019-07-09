const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.post("/", (req, res) => {
//   console.log("add new contact route hit with req:", req.body);
  pool.query(
    `INSERT INTO "user" ("firstname","lastname","email","phone","admin_id")
        VALUES (
        $1,
        $2,
        $3,
        $4,
        $5);`,
    [
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.phone,
      req.body.admin_id
    ]
  )
    .then(result => {
      console.log(result);
      res.sendStatus(201);
    })
    .catch(error => {
      console.log("error with INSERT INTO, error:", error);
      res.sendStatus(500);
    })
});

module.exports = router;
