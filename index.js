const express = require("express");
const Gun = require("Gun");

const app = express();

app.use(Gun.serve);

app.get("/", (_, res) => {
  res.end("Tudo certo por aqui");
});

const port = 3030;
const server = app.listen(port, () => {
  console.info(`Gun server listening at port ${port}`);
});

Gun({ web: server });
