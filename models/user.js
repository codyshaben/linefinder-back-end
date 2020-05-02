const { Model } = require('objection')

class User extends Model {
    static tableName = 'user'

    static get relationMappings() {
        const Trail = require('./trail')

        return {
            trails: {
                relation: Model.ManyToManyRelation,
                modelClass: Trail,
                join: {
                    from: 'user.id',
                    through: {
                        from: 'user_trails.userId',
                        to: 'user_trails.trailId'
                    },
                    to: 'trail.trail_id'
                }
            }
        }   
    }
}

module.exports = User 