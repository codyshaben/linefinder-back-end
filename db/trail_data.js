// require('dotenv').config()
// const fetch = require('node-fetch');
// var knex = require('./knex')

// const rei_api_url = `https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=1000&maxResults=500&key=${process.env.REI_API_KEY}`;

// const getTrails = () => {
//     fetch(rei_api_url)
//         .then(response => response.json())
//         .then(data => {
//             knex.insert(data.trails).into('trail').then(function (id) {
//                 console.log(id)
//             })
//         })
// }

// getTrails()
