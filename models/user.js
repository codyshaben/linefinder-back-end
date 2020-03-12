const { Model } = require('objection')

class User extends Model {
    static get tableName() {
        return 'user'
    }
    static get relationMappings() {
        const { Trail } = require('./trail')
        return {
            trails: {
                relation: Model.ManyToManyRelation,
                modelClass: Trail,
                join: {
                    from: 'user.id',
                    through: {
                        from: 'user_trails.trail_id',
                        to: 'user_trails.user_id'
                    },
                    to: 'trail.id'
                }
            }
        }
    }
}

module.exports = { User }