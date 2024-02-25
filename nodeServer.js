const net = require("net");
const server = net.createServer((socket) => {
  socket.on("data", (clientData) => {
    console.log(clientData.toString());
    socket.write("send to client ")
  });
});
server.listen(8000, () => {
  console.log("new server is running at 8080");
});
