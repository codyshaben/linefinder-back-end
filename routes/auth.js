const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const queries = require('../db/queries')
const jwt = require('jsonwebtoken');
const { check } = require('express-validator')
require('dotenv').config();

router.post('/signup', (req, res, next) => {
    const saltRounds = 10;
    const username = req.body.username
    const email = req.body.email
    let password = req.body.password

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            if (err) {
                throw err
            } else {
                req.body.password = hash
                queries.createUser(req.body)
                .then(user => {
                    res.json(user[0])
                })
            }
        })
    })
});

module.exports = router;