const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/:id", (req, res) => {
  // console.log(req.params);
  pool
    .query(
      `SELECT "item"."id","item"."name","item"."description","item"."currentBid","item"."photo","item"."belongs_to","auction"."auction_name"
FROM "item"
JOIN "auction" ON "item"."belongs_to"="auction"."id"
WHERE "auction"."id"=${req.params.id};`
    )
    .then(result => {
      //   console.log(result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log("Error completing GET admin auctions query:", err);
      res.sendStatus(500);
    });
});

module.exports = router;
