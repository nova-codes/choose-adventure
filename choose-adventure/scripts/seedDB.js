const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chooseadventure');

const userSeed = [
    {
        username: 'admin',
        password: 'admin'
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + ' records inserter!');
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
});