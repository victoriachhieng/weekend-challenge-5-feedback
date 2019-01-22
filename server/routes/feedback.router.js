const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {
  console.log('in feedback POST', req.body);
  //set up pool to send info to db
  const newFeedback = req.body;
  const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
  const queryValues = [
    newFeedback.feeling,
    newFeedback.understanding,
    newFeedback.support,
    newFeedback.comments,
  ];
  pool.query(sqlText, queryValues).then(() => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log('error adding feedback', error);
    res.sendStatus(500);
  });//end query
})//end POST

module.exports = router;
