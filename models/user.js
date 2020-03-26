const { Model } = require('objection')

class User extends Model {
    static tableName = 'user'

    static get relationMappings() {
        const Trail = require('./Trail')

        return {
            trails: {
                relation: Model.ManyToManyRelation,
                modelClass: Trail,
                join: {
                    from: 'user.email',
                    through: {
                        from: 'user_trails.userEmail',
                        to: 'user_trails.trailId'
                    },
                    to: 'trail.trail_id'
                }
            }
        }   
    }
}

module.exports = User 