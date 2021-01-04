const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;
const factSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User1",
    required: true,
  },

  createdAt: {
    type: String,
    default: () => moment().format("LLLL"),
  },
});
const Fact = mongoose.model("Fact", factSchema);

module.exports = Fact;
