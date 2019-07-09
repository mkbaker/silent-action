const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/:id", (req, res) => {
//   console.log(req.params);
  pool.query(
      `SELECT * 
        FROM "item"
        WHERE "id" = $1;`, [req.params.id]
  )
 .then(result => {
    //  console.log(result.rows);
   res.send(result.rows);
    })
    .catch(err => {
      console.log("Error completing GET item details query:", err);
      res.sendStatus(500);
    });
});

module.exports = router;