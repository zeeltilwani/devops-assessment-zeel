const express = require("express");

const app = express();

app.get("/", async (req, res) => {

  res.send(`
    <h1>DevOps Assessment</h1>
    <h2>Frontend Running</h2>
  `);
});

app.listen(3000, () => {

  console.log(
    JSON.stringify({
      service: "frontend",
      message: "Frontend Started"
    })
  );
});