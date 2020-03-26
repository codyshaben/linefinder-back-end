const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const queries = require('../db/queries')
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator')
require('dotenv').config();

const validationRules = [
    check('password').isLength({ min: 6 }),
    check('first_name').isAlpha(),
    check('last_name').isAlpha(),
]

router.post('/signup', validationRules, (req, res) => {
    const saltRounds = 10;
    let password = req.body.password

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            if (err) {
                throw err
            } else {
                req.body.password = hash
                queries.createUser(req.body)
                .then(user => res.json(user[0]))
            }
        })
    })
});

router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    queries.getUserByEmail(email)
    .then(user => {
        const hash = user[0].password
        bcrypt.compare(password, hash, function(err, result) {
            if (result === true) {
                jwt.sign({ user }, 'secretKey', (err, token) => {
                    res.json({ token , message: 'Login successful'})
                })
            } else {
                res.json({error: 'Incorrect password'})
            }
        })
    })
    
})

module.exports = router;