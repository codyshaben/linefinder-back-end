const { Model } = require('objection')

class Trail extends Model {
    static get tableName() {
        return 'trail'
    };
    
    static get relationMappings() {
        const User = require('./user');

        return {
            user: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'trail.trail_id',
                    through: {
                        from: 'user_trails.trailId',
                        to: 'user_trails.userId'
                    },
                    to: 'user.id'
                }
            }
        };
    };
};

module.exports = Trail;