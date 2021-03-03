const mongoose = require("mongoose");
const CurrentModel = require("../routes/models/storySection");


// const Chapters = mongoose.model('Chapter', chapterSchema)
const Chapter = require("../routes/models/storySection")

// Defining methods for the booksController
module.exports = {

    findById: function (req, res) {
        Chapter
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        Chapter
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body)
        Chapter
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        Chapter
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        Chapter
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

};