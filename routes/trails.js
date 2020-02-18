const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config()


router.get('/', async (req, res) => {
    const rei_api_url = `https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=1000&maxResults=500&key=${process.env.REI_API_KEY}`;
    const fetch_response = await fetch(rei_api_url);
    const json = await fetch_response.json()
    res.json(json)
})

router.get('/one-star', async (req, res) => {
    const rei_api_url = `https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=1000&maxResults=500&key=${process.env.REI_API_KEY}`;
    const fetch_response = await fetch(rei_api_url);
    const json = await fetch_response.json()
    res.json(json.trails.filter(trail => {
        return trail.stars < 2
    }))
})

router.get('/two-stars', async (req, res) => {
    const rei_api_url = `https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=1000&maxResults=500&key=${process.env.REI_API_KEY}`;
    const fetch_response = await fetch(rei_api_url);
    const json = await fetch_response.json()
    res.json(json.trails.filter(trail => {
        return trail.stars < 3
    }))
})

router.get('/three-stars', async (req, res) => {
    const rei_api_url = `https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=1000&maxResults=500&key=${process.env.REI_API_KEY}`;
    const fetch_response = await fetch(rei_api_url);
    const json = await fetch_response.json()
    res.json(json.trails.filter(trail => {
        return trail.stars < 4 && trail.stars > 3
    }))
})

router.get('/four-stars', async (req, res) => {
    const rei_api_url = `https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=1000&maxResults=500&key=${process.env.REI_API_KEY}`;
    const fetch_response = await fetch(rei_api_url);
    const json = await fetch_response.json()
    res.json(json.trails.filter(trail => {
        return trail.stars < 5 && trail.stars > 4
    }))
})

router.get('/five-stars', async (req, res) => {
    const rei_api_url = `https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=1000&maxResults=500&key=${process.env.REI_API_KEY}`;
    const fetch_response = await fetch(rei_api_url);
    const json = await fetch_response.json()
    res.json(json.trails.filter(trail => {
        return trail.stars === 5
    }))
})

module.exports = router