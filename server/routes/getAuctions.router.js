const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
    //the req.body is not getting here correctly, but req.user is accessing the User reducer info. 
    //this is functional, but is it correct? it might break later? 
  console.log("get route hit with payload:", req.user.id);
  pool
    .query(
      `SELECT * 
    FROM auction
   WHERE "auction_owner" = $1`,
    [req.user.id]
    )
    .then(result => {
    // console.log(result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log("Error completing GET admin auctions query:", err);
      res.sendStatus(500);
    });
});

module.exports = router;
