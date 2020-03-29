const express = require('express');
const queries = require('../db/queries')
const router = express.Router();

router.get('/', async (req, res) => {
  queries.getUsers().then(users => {
    res.json({data:users});
  })
});

//route we want to protect for users
router.get('/:email', (req, res) => {
  queries.getUserByEmail(req.params.email).then(user => {
    res.json({data:user});
  })
});

module.exports = router;