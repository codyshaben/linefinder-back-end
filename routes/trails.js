const express = require('express');
const router = express.Router();
require('dotenv').config()
const Trail = require('../db/trail')

router.get('/', (req, res) => {
    Trail.getTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/five-star', (req, res) => {
    Trail.getFiveStarTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/four-star', (req, res) => {
    Trail.getFourStarTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/three-star', (req, res) => {
    Trail.getThreeStarTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/two-star', (req, res) => {
    Trail.getTwoStarTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/one-star', (req, res) => {
    Trail.getOneStarTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/double-black', (req, res) => {
    Trail.getDoubleBlackTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/black', (req, res) => {
    Trail.getBlackTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/blue-black', (req, res) => {
    Trail.getBlueBlackTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/blue', (req, res) => {
    Trail.getBlueTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/greenBlue', (req, res) => {
    Trail.getGreenBlueTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/green', (req, res) => {
    Trail.getGreenTrails().then(trail => {
      res.json({data:trail});
    })
});

module.exports = router