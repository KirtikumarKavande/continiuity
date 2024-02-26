const http = require("http");
let server = http.createServer((req, res) => {
  if ((req.url = "home")) {
    res.end("this is home");
  } else {
    res.end("this is other route");
  }
});
server.listen(3000, () => {
  console.log("server is listing at port 3000");
});
