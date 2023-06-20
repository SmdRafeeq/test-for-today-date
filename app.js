const exp = require("express");
const app = exp();

app.get("/", (request, response) => {
  const newDate = new Date();

  response.send(
    `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
  );
});

module.exports = app;
