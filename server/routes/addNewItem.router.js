const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("add item route hit with req:", req.body);
  pool.query(`
        INSERT INTO "item" ("name","description","currentBid","photo","belongs_to")
VALUES (
$1,
$2,
$3,
$4,
$5);`,
[req.body.itemName, req.body.itemDescription, req.body.minimumBid, req.body.pictures, req.body.auctionId])
.then((result) => {
    console.log(result)
    res.sendStatus(201)})
 .catch((error) => {
    console.log('error with INSERT INTO, error:', error)
    res.sendStatus(500)
})});

module.exports = router;
