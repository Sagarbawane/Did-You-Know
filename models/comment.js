const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    minlength: 5,
  },
  factId: {
    type: Schema.Types.ObjectId,

    required: true,
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  createdAt: {
    type: String,
    default: () => moment().startOf(moment().format("ll")).fromNow(),
  },
});
const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
