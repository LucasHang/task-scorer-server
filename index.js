const express = require("express");
const Gun = require("gun");

const app = express();

app.use(Gun.serve);

app.get("/", (_, res) => {
  res.send("Tudo certo por aqui");
});

const port = process.env.PORT || 80;
const server = app.listen(port, () => {
  console.info(`Gun server listening at port ${port}`);
});

Gun({ web: server });
