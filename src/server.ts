import express from "express";

const app: express.Application = express();
const port = 8080;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
