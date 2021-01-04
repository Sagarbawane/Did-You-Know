const Comment = require("../models/comment");
const commentController = {};

commentController.list = (req, res) => {
  Comment.find()
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.json(err);
    });
};

commentController.create = (req, res) => {
  const body = req.body;
  const comment = new Comment(body);
  comment.userId = req.userId;
  comment
    .save()
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.json(err);
    });
};
commentController.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Comment.findOneAndUpdate({ _id: id, userId: req.userId }, body, {
    new: true,
    runValidators: true,
  })
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.json(err);
    });
};
commentController.destroy = (req, res) => {
  const id = req.params.id;
  Comment.findOneAndDelete({ _id: id, userId: req.userId })
    .then((comment) => {
      if (comment) {
        res.json(comment);
      } else {
        res.json("It is posted by other user ");
      }
    })
    .catch((err) => {
      res.json("It is posted by other user ");
    });
};
module.exports = commentController;
