/* global process */

const express = require("express");

const app = express();

app.use('/react',
  express.static("./dist", {
    setHeaders: function setHeaders(res) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    },
  })
);

app.get('/', function (req, res) {
  res.send('alive')
})

const PORT = process.env.PORT || 8500;
app.listen(PORT, '0.0.0.0');
console.log(`App is hosted on port ${PORT}.`); // eslint-disable-line no-console
