const http = require('http');

const direccion = 'https://nodejs-production-4160.up.railway.app/'; // Cambia esto a la dirección que desees
const puerto = 3000; // Cambia esto al puerto que desees

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Hola, mundo desde Node.js!\n');
});

server.listen(puerto, direccion, () => {
  console.log(`Servidor Node.js escuchando en http://${direccion}:${puerto}/`);
});
