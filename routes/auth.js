const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../db/user')
const jwt = require('jsonwebtoken');

require('dotenv').config();

function validUser(user)  {
    const validEmail = typeof user.email == 'string' &&
                        user.email.trim() != '';

    const validPassword = typeof user.password == 'string' &&
                        user.password.trim() != '';
                        user.password.trim().length >= 6;
    return validEmail && validPassword;
}

router.post('/signup', (req, res, next) => {
    if(validUser(req.body)) {
        User
            .getUserByEmail(req.body.email)
            .then(user => {
                console.log('user', user)
                if(!user) {
                    bcrypt.hash(req.body.password, 10)
                        .then((hash) => {
                            const user = {
                                first_name: req.body.first_name,
                                last_name: req.body.last_name,
                                email: req.body.email,
                                password: hash,
                                created_at: new Date()
                            }
                            User
                                .create(user)
                                .then(id => {
                                    jwt.sign({
                                        id,
                                    }, process.env.TOKEN_SECRET, {expiresIn: '1h'}, (err, token) => {
                                        res.json({
                                            id,
                                            token,
                                            message: 'ok'
                                        })
                                    });
                                });
                        });
                } else {
                   next(new Error('Email in use')) 
                }  
            });
    } else {
        next(new Error('Invalid user'))
    }
    
});

router.post('/login', (req, res, next) => {

    if(validUser(req.body)){
        User
            .getUserByEmail(req.body.email)
            .then(user => {
                if(user) {
                    bcrypt.compare(req.body.password, user.password)
                        .then((result) => {
                            //if passwords match
                            if (result ===  true) {
                                jwt.sign({
                                    id: user.id
                                }, process.env.TOKEN_SECRET, { expiresIn: '1h'}, (err, token) => {
                                    res.json({
                                        id: user.id,
                                        token,
                                        message: 'ok'
                                    })
                                })
                            } else {
                                next(new Error('Invalid login'))
                            }
                        })
                } else {
                    next(new Error('Invalid login'))
                }
            })
    } else {
        next(new Error('Invalid login'))
    }

    // User.getUserByEmail(email)
    // .then(user => {
    //     const hash = user[0].password
    //     bcrypt.compare(password, hash, function(err, result) {
    //         if (result === true) {
    //             jwt.sign({ user }, 'secretKey', (err, token) => {
    //                 res.json({ token , message: 'Login successful'})
    //             })
    //         } else {
    //             res.json({error: 'Incorrect password'})
    //         }
    //     });
    // });
});

module.exports = router;