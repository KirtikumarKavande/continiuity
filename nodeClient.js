const net = require('net');
const client = net.createConnection({ port: 8000 }, () => {
  console.log('Connected to server!');
  client.write('Hello from client');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

