const express = require('express');
const User = require('../db/user')
const router = express.Router();
const authMiddleware = require('../routes/middleware')


router.get('/', (req, res) => {
    User.getUserTrails().then(users => {
      res.json({data:users});
    })
  });

router.post('/:id',  authMiddleware.allowAccess, (req, res) => {
    User.addUserTrails(req.body)
      .then(user_trail => {
          res.json({data:user_trail})
      })
})


  // User.addUserTrails(req.body)
  // .then(user_trail => {
  //     res.json({data:user_trail})
  // })



module.exports = router;