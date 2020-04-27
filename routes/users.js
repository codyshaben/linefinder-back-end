const express = require('express');
const User = require('../db/user')
const router = express.Router();
const authMiddleware = require('../routes/middleware')

router.get('/', async (req, res) => {
  User.getUsers().then(users => {
    res.json({data:users});
  })
});

//route we want to protect for users
router.get('/:id', authMiddleware.allowAccess, (req, res) => {
  if(!isNaN(req.params.id)) {
    User.getUserById(req.params.id).then(user => {
      if (user) {
        delete user.password
        res.json({data:user});
      } else {
        resError(res, 404, 'User not found')
      }
    })
  } else {
    resError(res, 500, 'Invalid ID')
  }
});

// , authMiddleware.allowAccess
router.delete('/:id', (req, res) => {
  // console.log(req.params)
  if(!isNaN(req.params.id)) {
    User.getUserById(req.params.id).then(user => {
      if (user) {
        user.trails.map(trail => console.log(trail))
        // res.json({data:user});
      } else {
        resError(res, 404, 'User not found')
      }
    })
  } else {
    resError(res, 500, 'Invalid ID')
  }
})
// router.get('/:id/mytrails', authMiddleware.allowAccess, (req, res) => {
//   if(!isNaN(req.params.id)) {
//     User.getUserById(req.params.id).then(user => {
//       if (user) {
//         delete user.password
//         res.json({data:user.trails});
//       } else {
//         resError(res, 404, 'User not found')
//       }
//     })
//   } else {
//     resError(res, 500, 'Invalid ID')
//   }
// });

const resError = (res, statusCode, message) => {
  res.status(statusCode)
  res.json({ message })
}


module.exports = router;