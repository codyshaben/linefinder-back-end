const { Model } = require('objection');
const request = require('request');


class Trail extends Model {

    static get tableName() {
        const allTrails = []

        request('https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=1000&maxResults=500&key=200603620-a27f4d07df1f945df4e225ea302ec3c7', { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }  
                body.trails.forEach(trail => {
                    allTrails.push(trail) 
                });
            })
        console.log(allTrails)
    }
}

module.exports = { Trail }