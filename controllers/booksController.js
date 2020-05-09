const db = require("../models");

module.exports = {
  findAll: function (request, response) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => response.json(dbModel))
      .catch((error) => response.status(422).json(error));
  },
  findById: function (request, response) {
    db.Book.findById(req.params.id)
      .then((dbModel) => response.json(dbModel))
      .catch((error) => response.status(422).json(error));
  },
  create: function (req, res) {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
