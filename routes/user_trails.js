const express = require('express');
const UserTrails = require('../db/user_trails')
const router = express.Router();
const authMiddleware = require('../routes/middleware')


router.get('/', (req, res) => {
    UserTrails.getUserTrails().then(users => {
      res.json({data:users});
    })
});

router.get('/:email', (req, res) => {
    UserTrails.getUserTrailsByEmail(req.params.email).then(trails => {
      res.json({data:user_trails})
    })
})

router.post('/:id',  authMiddleware.allowAccess, (req, res) => {
  // console.log('body', req.body)
  // console.log('params', req.params)
    UserTrails.addUserTrails(req.body)
      .then(user_trail => {
          res.json({data:user_trail})
      })
})

router.delete('/:id', (req, res) => {
  console.log(req.params)
    UserTrails.deleteUserTrails(req.params.id)
      .then(res.json({message: 'deleted'}))
})

module.exports = router;