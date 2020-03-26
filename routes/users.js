const express = require('express');
const queries = require('../db/queries')
const router = express.Router();

router.get('/', async (req, res) => {
  queries.getUsers().then(users => {
    res.json({data:users});
  })
});

//route we want to protect for users
router.get('/:id', (req, res) => {
  queries.getUserById(req.params.id).then(user => {
    res.json({data:user});
  })
});

router.get('/:id/trails', (req, res) => {
  queries.getUserTrails(req.params.id).then(user => {
    res.json({data:user});
  })
});

module.exports = router;