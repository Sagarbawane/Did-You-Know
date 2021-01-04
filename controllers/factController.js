const Fact = require("../models/fact");

const factController = {};

factController.list = (req, res) => {
  Fact.find()
    .then((fact) => {
      res.json(fact);
    })
    .catch((err) => {
      res.json(err);
    });
};

factController.create = (req, res) => {
  const body = req.body;
  const fact = new Fact(body);
  // assigning the user id to the message
  fact.userId = req.userId;
  console.log(req.userId);
  fact
    .save()
    .then((fact) => {
      res.json(fact);
    })
    .catch((err) => {
      res.json(err);
    });
};
factController.show = (req, res) => {
  const id = req.params.id;
  Fact.findById(id)
    .then((fact) => {
      res.json(fact);
    })
    .catch((err) => {
      res.json(err);
    });
};

factController.update = (req, res) => {
  const id = req.params.id;

  const body = req.body;
  const user = req.userId;

  Fact.findByIdAndUpdate({ _id: id, user }, body, {
    new: true,
    runValidators: true,
  }).then((fact) => {
    if (fact) {
      res.json(fact);
    } else {
      res.json({});
    }
  });
};
factController.destroy = (req, res) => {
  const id = req.params.id;
  const user = req.userId;

  Fact.findOneAndDelete({ _id: id, userId: req.userId })
    .then((fact) => {
      if (fact) {
        res.json(fact);
      } else {
        res.json("It is posted by other user ");
      }
    })
    .catch((err) => {
      res.json("It is posted by other user ");
    });
};

module.exports = factController;
