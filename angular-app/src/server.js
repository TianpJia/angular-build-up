const http = require("http");

const app = http.createServer((req, res) => {
  if (req.url === "/api/hello") {
    res.end("hello node");
  }
  if (req.url === "/hello") {
    res.end("hello angular node");
  }
});

app.listen(9000, "localhost", () => {
  console.info("loaclhost: 9000");
});
