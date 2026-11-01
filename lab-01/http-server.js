// http-server.js
// Task 3: Plain Node.js server using built-in http module
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(`[HTTP Server] Incoming request: ${req.method} ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello');
});

server.listen(PORT, () => {
  console.log(`Plain HTTP Server is running on http://localhost:${PORT}`);
});

