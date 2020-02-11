const express = require('express');
const queries = require('../db/queries')
const router = express.Router();

router.get('/', (req, res) => {
  queries.getUsers().then(users => {
    res.json({data:users});
  })
});

router.get('/:id', (req, res) => {
  queries.getUserById(req.params.id).then(user => {
    res.json({data:user});
  })
});

module.exports = router;