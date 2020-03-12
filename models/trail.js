const { Model } = require('objection')


class Trail extends Model {
    static get tableName() {
        return 'trail'
    }
    static get relationMappings() {
        const { User } = require('./user')
        return {
            user: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'trail.id',
                    through: {
                        from: 'user_trails.user_id',
                        to: 'user_trails.resort_id'
                    },
                    to: 'user.id'
                }
            }
        }
    }
}

module.exports = { Trail }