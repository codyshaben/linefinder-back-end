const { Model } = require('objection');

class UserTrails extends Model {
    static get tableName() {
        return 'user_trails'
    };
};

module.exports = UserTrails;