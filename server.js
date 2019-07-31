const express = require('express'); // instantiate express
const cors = require('cors'); // cors library for cross origin request control
const helmet = require('helmet') // helmet library to automate headers setting and secutities
const server = express(); // assign server to express instance
const workersEndPointsRoutes = require('./Routes/workersRoutes');

server.use(helmet());
server.use(cors());
server.use(express.json());

workersEndPointsRoutes(server);

module.exports = server; // export to calling function (index.js in this case)