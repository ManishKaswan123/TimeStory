const http = require('http');
const { apiRequest } = require('./routes');

const PORT = 3000;

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});