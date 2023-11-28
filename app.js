const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/submit", urlencodedParser, (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  res.send(JSON.stringify(req.body));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
