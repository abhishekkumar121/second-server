const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url === "/home") {
    res.end("Welcome home");
  } else if (req.url === "/about") {
    res.end("Welcome to About Us page");
  } else if (req.url === "/node") {
    res.end("Welcome to my Node Js project");
  } else {
    res.end("404 Not Found");
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
