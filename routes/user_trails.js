const express = require('express');
const queries = require('../db/queries')
const router = express.Router();

router.get('/', (req, res) => {
    queries.getUserTrails().then(users => {
      res.json({data:users});
    })
  });

router.post('/', (req, res) => {
  queries.addUserTrails(req.body)
  .then(user_trail => {
      res.json({data:user_trail})
  })
});


module.exports = router;