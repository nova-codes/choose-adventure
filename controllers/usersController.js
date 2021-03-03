const db = require("../models");

// Defining methods for the booksController
module.exports = {
    // signIn: function(req,res){
    //     const {email, password} = req.body

    // }
    findById: function(req, res) {
    db.Users      
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
};
