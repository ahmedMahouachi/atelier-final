const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3001;

const server = http.createServer(app);
 
server.listen(port, () => {
    console.log("serveur lancé sur http://localhost:3001"); 
});