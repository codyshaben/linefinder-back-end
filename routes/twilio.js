const express = require('express');
const router = express.Router();
const TokenService = require('../services/tokenService');

router.post('/', (req, res) => {
    const deviceId = req.body.deviceId
    const identity = req.body.identity

    const token = TokenService.generate(identity, deviceId)

    res.json({
        identity: identity,
        token: token.toJwt(),
    });
});

module.exports = router