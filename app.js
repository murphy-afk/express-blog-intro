import express from 'express'

const app = express();
const port = 3005;

app.listen(port, function () {
  console.log("Server is listening on port: " + port);
});
