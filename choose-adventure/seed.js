const db = require('./models');

const seed = {
    seedUsers: () => {
        db.User.bulkCreate([
            {username: 'admin', password: 'admin'}
        ])
    }
}

module.exports = seed;