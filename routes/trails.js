const express = require('express');
const router = express.Router();
require('dotenv').config()
const queries = require('../db/queries')

router.get('/', (req, res) => {
    queries.getTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/five-star', (req, res) => {
    queries.getFiveStarTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/four-star', (req, res) => {
    queries.getFourStarTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/three-star', (req, res) => {
    queries.getThreeStarTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/two-star', (req, res) => {
    queries.getTwoStarTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/one-star', (req, res) => {
    queries.getOneStarTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/double-black', (req, res) => {
    queries.getDoubleBlackTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/black', (req, res) => {
    queries.getBlackTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/blue-black', (req, res) => {
    queries.getBlueBlackTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/blue', (req, res) => {
    queries.getBlueTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/greenBlue', (req, res) => {
    queries.getGreenBlueTrails().then(trail => {
      res.json({data:trail});
    })
});

router.get('/green', (req, res) => {
    queries.getGreenTrails().then(trail => {
      res.json({data:trail});
    })
});

module.exports = router