const express = require('express');
const UserTrails = require('../db/user_trails');
const router = express.Router();
const authMiddleware = require('../routes/middleware');
const User = require('../db/user');

router.get('/:id', (req, res) => {
    UserTrails.getUserTrailsByUserId(req.params.id).then(trails => {
      res.json({data:trails})
    });
});

router.post('/:id', authMiddleware.isLoggedIn, (req, res) => {
    UserTrails.addUserTrails(req.body)
        if (res.statusCode === 200) {
            res.json({ message: 'success' })
        } else {
            new Error('Action Failed')
        };
});

router.delete('/:id/:user_trail', authMiddleware.isLoggedIn, (req, res, next) => {
    const userTrailId = req.params.user_trail;

    const findTrail = (trails) => {
        trails.find(trail => {
            if (trail.trail_id == userTrailId) {
                UserTrails.deleteUserTrails(trail.trail_id)
                .then(res.json({ message: 'success'} ))
                .then(res.json(UserTrails.getUserTrailsByUserId(req.params.id)))
            } else {
            next(new Error('Trail not found'))
            };
        });
    };

    User
        .getUserById(req.params.id)
        .then(user => {
          findTrail(user.trails)
        });     
});

module.exports = router;