const jwt = require('jsonwebtoken')
require('dotenv').config()

const checkTokenSetUser = (req, res, next) => {
   const tokenHeader = req.get('Authorization');
   console.log('tokenheader', tokenHeader)
   if (tokenHeader) {
       const token = tokenHeader.split(' ')[1]
       jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
           if (err) {
               next()
           } else {
               console.log(decoded)
               req.user = decoded
               next()
           }
       })
   } else {
       next()
   }
}

const isLoggedIn = (req, res, next) => {
    console.log(req.user)

    if(req.user) {
        next()
    } else {
        res.status(401)
        next(new Error('Un-Authorized'))
    }
}

const allowAccess = (req, res, next) => {
    if (req.user.id == req.params.id) {
        next()
    } else {
        res.status(401)
        next(new Error('Un-Authorized'))
    }
}

module.exports = {
    checkTokenSetUser,
    isLoggedIn,
    allowAccess
}