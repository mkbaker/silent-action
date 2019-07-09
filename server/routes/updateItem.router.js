const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.put("/", (req, res) => {
  console.log("add item route hit with req:", req.body);
  pool.query(`
     UPDATE "item"
        SET "name"=$2,
        "description"=$3,
        "currentBid"=$4,
        "photo"=$5
        WHERE "id"=$1`,
      [
        req.body.id,
        req.body.name,
        req.body.description,
        req.body.currentBid,
        req.body.photo
      ]
    )
    .then(result => {
      console.log(result);
      res.sendStatus(201);
    })
    .catch(error => {
      console.log("error with UPDATE item, error:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
