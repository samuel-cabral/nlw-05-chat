import { Socket } from 'socket.io';
import { io } from '../http';

io.on('connect', (socket: Socket) => {
  socket.on('client_first_access', (params) => {
    console.log(params);

    // Salvar a conexão com socket_id, user_id,
  });
});
