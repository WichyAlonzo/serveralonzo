const http = require('http');

// Crea un servidor HTTP
const server = http.createServer((req, res) => {
  // Configura las cabeceras de la respuesta HTTP
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Escribe el mensaje de respuesta
  res.end('¡Hola 🥳 Montamos el primer servidor asi es!\n');
});

// Escucha en el puerto 3000
const puerto = 3000;
server.listen(puerto, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${puerto}`);
});
