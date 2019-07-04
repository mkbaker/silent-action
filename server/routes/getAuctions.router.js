const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
    //the req.body is not getting here correctly
  console.log("get route hit with payload:", req.body);
  pool
    .query(
      `SELECT * 
    FROM auction
   WHERE "auction_owner" = $1`,
    [req.body.id]
    )
    .then(result => {
        console.log(result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log("Error completing GET admin auctions query:", err);
      res.sendStatus(500);
    });
});

module.exports = router;
