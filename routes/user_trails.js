const express = require('express');
const UserTrails = require('../db/user_trails')
const router = express.Router();
const authMiddleware = require('../routes/middleware')
const User = require('../db/user')
const Trail = require('../db/trail')


router.get('/:id', (req, res) => {
    UserTrails.getUserTrailsByUserId(req.params.id).then(trails => {
      res.json({data:trails})
    })
})

router.post('/:id',  (req, res) => {
    UserTrails.addUserTrails(req.body)
      if (res.statusCode === 200) {
        res.json({ message: 'success' })
      } else {
        new Error('Action Failed')
      }
})

router.delete('/:id', (req, res) => {
    User.getUserById(req.params.id).then(user => {
      if (user) {
        user.trails.map(trail => {
          if (trail.trail_id === req.body.trailId) {
            UserTrails.deleteUserTrails(req.body.trailId).then(trail => {
              res.json({ message: 'Deleted'})
            })
            
          } else {
            new Error('Trail does not exist')
          }
        })
      }
    })
    
})


module.exports = router;