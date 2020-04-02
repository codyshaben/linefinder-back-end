const express = require('express');
const User = require('../db/user')
const router = express.Router();

router.get('/', async (req, res) => {
  queries.getUsers().then(users => {
    res.json({data:users});
  })
});

//route we want to protect for users
router.get('/:id', (req, res) => {
  User.getUserById(req.params.id).then(user => {
    res.json({data:user});
  })
});


module.exports = router;