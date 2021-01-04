const mongoose = require("mongoose");

const configuredb = () => {
  mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/project", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((count) => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = configuredb;
