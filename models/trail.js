const { Model } = require('objection')


class Trail extends Model {
    static get tableName() {
        return 'trail'
    }
}

module.exports = { Trail }