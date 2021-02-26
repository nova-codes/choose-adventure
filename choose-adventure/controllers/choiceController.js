const mongoose = require("mongoose");
const CurrentModel = require("../routes/models/storySection");


const Choices = mongoose.model('Choice', chapterSchema)


// Defining methods for the booksController
module.exports = {

    findById: function (req, res) {
        Choices
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        Choices
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        Choices
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        Choices
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

};