const WebSocket = require('ws');

// Define a porta a partir da variável de ambiente ou usa a porta 3000
const port = process.env.PORT || 3000;
const server = new WebSocket.Server({ port });

server.on('connection', (socket) => {
  console.log('Um cliente conectado');

  socket.on('message', (message) => {
    console.log('Mensagem recebida:', message);
    
    // Envia a mensagem para todos os clientes conectados
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  socket.on('close', () => {
    console.log('Um cliente desconectado');
  });
});

console.log(`Servidor rodando na porta ${port}`);
