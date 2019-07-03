const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


router.post('/', (req, res) => {
    pool.query(
        `INSERT INTO "auction" ("auction_name","auction_owner", "start_date","end_date","bio","photo_url")
    VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6);`, [
          req.body.auctionName,
          req.body.auctionOwner,
          req.body.startDate,
          req.body.endDate,
          req.body.bio,
          req.body.photoUrl
        ]
      )
    //console.log(req.body.auctionName, req.body.auctionOwner, req.body.startDate, req.body.endDate, req.body.bio, req.body.photoUrl)
      .then(result => {
         res.send(result.rows);
      })
      .catch(err => {
        console.log("Error completing INSERT INTO auction query", err);
        res.sendStatus(500);
      });
});


module.exports = router;