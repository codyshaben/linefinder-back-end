const express = require('express');
const User = require('../db/user');
const router = express.Router();
const authMiddleware = require('../routes/middleware');

//route we want to protect for users
router.get('/:id', authMiddleware.isLoggedIn,  (req, res) => {
  if(req.params.id) {
    User
      .getUserById(req.params.id).then(user => {
        if (user) {
          delete user.password;
          res.json({data:user});
        } else {
          resError(res, 404, 'User not found');
        }
      })
  } else {
    resError(res, 500, 'Invalid ID');
  };
});

const resError = (res, statusCode, message) => {
  res.status(statusCode);
  res.json({ message });
};


module.exports = router;