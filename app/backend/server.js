const express = require("express");
const client = require("prom-client");

const app = express();

const register = new client.Registry();

client.collectDefaultMetrics({
  register
});

const requestCounter = new client.Counter({
  name: "api_requests_total",
  help: "Total API Requests"
});

register.registerMetric(requestCounter);

app.get("/", (req, res) => {

  requestCounter.inc();

  console.log(JSON.stringify({
    service: "backend",
    endpoint: "/",
    status: 200
  }));

  res.json({
    message: "Backend API Running"
  });
});

app.get("/health", (req, res) => {

  res.status(200).json({
    status: "healthy"
  });
});

app.get("/metrics", async (req, res) => {

  res.set("Content-Type", register.contentType);

  res.end(await register.metrics());
});

app.listen(5000, () => {

  console.log(
    JSON.stringify({
      service: "backend",
      message: "Backend Started"
    })
  );
});