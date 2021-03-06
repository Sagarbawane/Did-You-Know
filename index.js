const express = require("express");
const configuredb = require("./config/database");
const cors = require("cors");
// const router = require("./config/route");
const path=require('path')
const app = express();
const router = require("./config/route");
const port = process.env.PORT || 3090;

configuredb();
app.use(cors());
app.use(express.json());
app.use(router);
// app.use(router);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(port, () => {
  console.log("server is runnig on port", port);
});
