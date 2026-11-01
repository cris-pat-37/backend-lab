// server.js
// Lab 1: Node.js and Express server
// Backend Development Fundamentals - Year II Term II - Aurora
// Faculty: Joel Prashanth D

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware for request & response status logging (Task 7 requirement)
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> Status: ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// JSON body parser (standard practice)
app.use(express.json());

// Task 5 - Route 1: GET / (welcome text)
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Backend Development Fundamentals - Lab 1 Server!');
});

// Task 5 - Route 2: GET /about (JSON with name and section)
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'Vishwapathi Aravindh',
    registrationNumber: 'MCA-2024-001',
    section: 'MCA - Section A',
    course: 'Backend Development Fundamentals',
    term: 'Year II Term II',
    faculty: 'Joel Prashanth D'
  });
});

// Task 5 - Route 3: GET /time (current date and time using new Date())
app.get('/time', (req, res) => {
  const currentDate = new Date();
  res.status(200).json({
    currentTime: currentDate.toString(),
    isoString: currentDate.toISOString(),
    utcString: currentDate.toUTCString(),
    timestamp: currentDate.getTime()
  });
});

// Task 6: Return a 404 message for any unknown path
app.use((req, res) => {
  res.status(404).json({
    error: '404 Not Found',
    message: `Cannot ${req.method} ${req.originalUrl} - Route not found on this server.`
  });
});

// Task 4: Start Express server and listen on specified port
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
  console.log(`Ready to accept connections.`);
});

