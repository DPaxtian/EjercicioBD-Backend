require('dotenv').config();
const Server = require('./src/models/server');
const initDatabase = require('./src/configuration/db-config')
const server = new Server();

server.listen();
initDatabase();